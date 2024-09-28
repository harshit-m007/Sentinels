# Available backend options are: "jax", "tensorflow", "torch".
import os
os.environ["KERAS_BACKEND"] = "tensorflow"
	
import keras

model = keras.saving.load_model("hf://inzamamalii/image_forgery_detection")
