

import os 
import numpy as np
import torch
import matplotlib.pyplot as plt
from PIL import Image
from model.load_model import load_model


# model,device = load_model()

def check_forgery(model, device, img_path='./example.jpg', output_dir='./Output/'):

    print("in check")
    # Ensure the output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    # print("Hello")  # This should now print

    model.to(device)
    model.eval()

    im = Image.open(img_path)
    im = np.array(im)
    original_image = im.copy()

    im = torch.Tensor(im)
    im = im.unsqueeze(0)
    im = im.transpose(2, 3).transpose(1, 2)
    im = im.to(device)

    with torch.no_grad():
        final_output = model(im)

    # Plot and save the predicted forgery mask
    plt.figure()
    plt.imshow((final_output[0][0]).cpu().detach(), cmap='gray')
    plt.title('Predicted forgery mask')
    plt.savefig(os.path.join(output_dir, 'predicted_forgery_mask.png'))

    # Plot and save the suspicious regions detected
    plt.figure()
    plt.imshow((final_output[0][0].cpu().detach().unsqueeze(2) > 0.2) * torch.tensor(original_image))
    plt.title('Suspicious regions detected')
    plt.savefig(os.path.join(output_dir, 'suspicious_regions_detected.png'))

    # plt.show()