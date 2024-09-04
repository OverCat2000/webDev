import torch
from ts.torch_handler.base_handler import BaseHandler
import numpy as np

class MLPModelHandler(BaseHandler):
    def initialize(self, context):
        self.manifest = context.manifest
        properties = context.system_properties
        model_dir = properties.get("model_dir")
        model_pt_path = f"{model_dir}/{self.manifest['model']['serializedFile']}"
        self.model = torch.jit.load(model_pt_path, map_location="cpu")
        self.model.eval()

    def preprocess(self, data):
        """
        Preprocess the input data for inference.
        """
        # Print the incoming data to debug
        print("Received data:", data)
        
        # Extract input data from the request
        input_data = data[0].get("body")
        
        if input_data is None:
            raise ValueError("Input data is missing 'body' key")
        
        # Check if input_data is a dictionary
        if not isinstance(input_data, dict):
            raise TypeError("Expected dictionary for 'body', got: {}".format(type(input_data)))
        
        # Ensure all values in the dictionary are numbers
        if not all(isinstance(x, (int, float)) for x in input_data.values()):
            raise TypeError("All values in 'body' must be numbers")
        
        # Convert dictionary values to a list
        temp = input_data
        tmp = torch.tensor(np.array(list(zip(temp.values()))), dtype=torch.float32)
        tmp = tmp.transpose(0, 1)
        print(tmp)

        # Convert list to a PyTorch tensor
        # input_tensor = torch.tensor(input_values, dtype=torch.float32)
        
        return tmp

    def inference(self, input_tensor):
        """
        Perform inference on the input tensor.
        """
        with torch.no_grad():
            return self.model(input_tensor)

    def postprocess(self, output):
        """
        Postprocess the output tensor and convert it to a list.
        """
        return output.numpy().tolist()
