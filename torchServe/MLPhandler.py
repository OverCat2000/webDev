from ts.torch_handler.base_handler import BaseHandler
import torch

class MLPHandler(BaseHandler):
    def __init__(self):
        super(MLPHandler, self).__init__()
        self.model = None
        self.initialized = False

    def initialize(self, context):
        # Load the model
        self.model = torch.load('MLP.pt')
        self.model.eval()
        self.initialized = True

    def preprocess(self, data):
        # Example preprocessing for numerical data
        # Assuming data is a list of dictionaries with 'body' key containing raw input
        inputs = [torch.tensor(d['body'], dtype=torch.float32) for d in data]
        return torch.stack(inputs)

    def inference(self, data, *args, **kwargs):
        # Perform inference
        with torch.no_grad():
            output = self.model(data)
        return output

    def postprocess(self, data):
        # Example postprocessing (convert tensor to list or other formats as needed)
        return data.tolist()
