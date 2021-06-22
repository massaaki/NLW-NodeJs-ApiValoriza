[![Author](https://img.shields.io/badge/Author-massaaki-blue)](https://github.com/massaaki/)
# API - Valoriza
Developed during NLW #06 with NodeJs, Typescript, Express and Typeorm

## Architecture
![project architecture](https://github.com/massaaki/NLW-NodeJs-ApiValoriza/blob/main/images/architecture.png)

## Getting started

Clone the project
```
git clone https://github.com/massaaki/NLW-NodeJs-ApiValoriza
```

Install dependences
```
yarn
```

Start server
```
yarn dev
```

## Creating migrations
```
yarn typeorm migration:create -n <EntityName> 
```
## Execute migrations
```
yarn typeorm migration:run  
```
## Revert migration
```
yarn typeorm migration:revert
```

## Create a Entity
```
yarn typeorm entity:create <EntityName>
```


## License
This project is under the [MIT license](https://opensource.org/licenses/MIT).
