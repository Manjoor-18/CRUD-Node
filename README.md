```sh
# create .env.sample
# make sure to fill in missing values in your .env.sample after doing this
#below is the cmd to create .env from .env.sample file
cp .env.sample .env
#NOTE: .env.sample may present in repo only after cloning you just use above cmd to generate .env file


# install deps
yarn

# run the application
yarn start

#cmd to change node version
# npm use @nodeVersion     #this repo may expect node of version 18 or above
```

```sh
#Steps to create docker image and containers from it:
# Create an empty file named Dockerfile.  Create a docker file with all details of application like port number and packages. 
#cmd1 : touch Dockerfile                #to create docker file.
#cmd2 : docker build -t dockerImageName .         #to Build the.
#cmd3 : docker run -dp IPAdress:PORTNumber:PortNumber ContainerName      #to create container image, below is the example.
# ex:   docker run -dp 127.0.0.1:8090:8090 manjoor 
```

