<h1 align="center">API - Valoriza</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

 <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=8257E5&labelColor=000000" alt="NLW 06" />
</p>
<p align="center">Just a simple api to send and receive compliments, that can be filtered by tags</p>
<p align="center">Technologies: NodeJs, Typescript, Express and Typeorm</p>
<br>



<h2 align="center"> Architecture </h2>
<div align="center">
  <img src="https://github.com/massaaki/NLW-NodeJs-ApiValoriza/blob/main/images/architecture.png" />
</div>

## Getting started

Clone this repository and go to project folder
```
git clone https://github.com/massaaki/NLW-NodeJs-ApiValoriza apiValoriza
cd ./apiValoriza
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
