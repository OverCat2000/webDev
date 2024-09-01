torch-model-archiver --model-name mlp_model \
                      --version 1.0 \
                      --serialized-file ./MLP.pt \
                      --handler ./MLPhandler.py \
                      --export-path ./model_store

rm ./model_store/mlp_model.mar
torch-model-archiver \
    --model-name mlp_model \
    --version 1.0 \
    --serialized-file ./mlp_model.pt \
    --handler ./mlp_handler.py \
    --export-path ./model_store



docker run --rm -it -p 8080:8080 -p 8081:8081 --name=torchserve \
    -v ./model_store:/model_store \
    -e MODEL_STORE=/model_store \
    pytorch/torchserve \
    torchserve --start --disable-token-auth --model-store /model_store --models mlp_model=mlp_model.mar

docker run --rm -it -p 8080:8080 -p 8081:8081 \
        -v ./model-store:/model-store pytorch/torchserve:latest\
         torchserve --model-store /model-store --models mlp_model=mlp_model.mar

torchserve --start --model-store model_store --disable-token-auth --models mlp_model=mlp_model.mar

curl -X POST http://127.0.0.1:8080/predictions/mlp_model -H "Content-Type: application/json" -d '{"body": {"A": 1.27, "B": -0.45, "C": 0.85, "D": -1.75, "E": 0.65, "F": -0.35, "G": 1.20}}'
