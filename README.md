# BCP - PROYECTO FRONT END

### Requisitos
* Angular 9
---
Ejecutar DockerFile - Ambiente Linux

Creación de imagen docker
* sudo docker build -t bcp-front:1.0 .

Creación de contenedor con la imagen construida
* sudo docker run -d -p 5000:4200 --name bcp_container_front bcp-front:1.0
---
