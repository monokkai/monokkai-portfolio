FROM final-image-7a038fb3-bf46-4deb-a811-d8c25463cfdf-code
WORKDIR /opt/build
RUN DEBIAN_FRONTEND=noninteractive apt update && apt install -y npm
