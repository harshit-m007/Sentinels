# %load_ext autoreload 
# %autoreload 2.

import os

# try:
#     os.chdir('./MantraNet')
# except:
#     pass

import gc
from model.mantranet import *
from pytorch_lightning import Trainer

def load_model():
    device='cuda' #to change if you have a GPU with at least 12Go RAM (it will save you a lot of time !)
    model=pre_trained_model(weight_path=r'C:\Users\prasu\Desktop\sentinels\Sentinels\team_sentinels\backend\model\MantraNetv4.pt',device=device)

    model.eval()

    return model,device

