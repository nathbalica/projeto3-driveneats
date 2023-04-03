# Mystique

![Tests Status](https://zapay-pagamentos.github.io/mystique/tests-badge.svg?dummy=8484744)
[![Coverage Status](https://zapay-pagamentos.github.io/mystique/coverage-badge.svg?dummy=8484744)](https://zapay-pagamentos.github.io/mystique/)

[![Quality Gate Status](https://sonar.usezapay.com.br/api/project_badges/measure?project=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&metric=alert_status&token=squ_bddfc5f176235d05c3b90b51560f35b29d0c3a33)](https://sonar.usezapay.com.br/dashboard?id=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn)
[![Bugs](https://sonar.usezapay.com.br/api/project_badges/measure?project=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&&metric=bugs&token=squ_bddfc5f176235d05c3b90b51560f35b29d0c3a33)](https://sonar.usezapay.com.br/dashboard?id=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&)
[![Code Smells](https://sonar.usezapay.com.br/api/project_badges/measure?project=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&&metric=code_smells&token=squ_bddfc5f176235d05c3b90b51560f35b29d0c3a33)](https://sonar.usezapay.com.br/dashboard?id=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&)
[![Vulnerabilities](https://sonar.usezapay.com.br/api/project_badges/measure?project=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&&metric=vulnerabilities&token=squ_bddfc5f176235d05c3b90b51560f35b29d0c3a33)](https://sonar.usezapay.com.br/dashboard?id=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&)
[![Duplicated Lines (%)](https://sonar.usezapay.com.br/api/project_badges/measure?project=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&&metric=duplicated_lines_density&token=squ_bddfc5f176235d05c3b90b51560f35b29d0c3a33)](https://sonar.usezapay.com.br/dashboard?id=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&)
[![Maintainability Rating](https://sonar.usezapay.com.br/api/project_badges/measure?project=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&&metric=sqale_rating&token=squ_bddfc5f176235d05c3b90b51560f35b29d0c3a33)](https://sonar.usezapay.com.br/dashboard?id=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&)
[![Reliability Rating](https://sonar.usezapay.com.br/api/project_badges/measure?project=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&&metric=reliability_rating&token=squ_bddfc5f176235d05c3b90b51560f35b29d0c3a33)](https://sonar.usezapay.com.br/dashboard?id=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&)
[![Security Rating](https://sonar.usezapay.com.br/api/project_badges/measure?project=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&&metric=security_rating&token=squ_bddfc5f176235d05c3b90b51560f35b29d0c3a33)](https://sonar.usezapay.com.br/dashboard?id=zapay-pagamentos_mystique_AYLLvuDg5_G7ZklMOQIn&)

## Sobre

Mystique é um serviço Zapay que simula as APIs dos detrans.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Python](https://www.python.org/)
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Django ORM](https://docs.djangoproject.com/en/4.0/topics/db/)

## Como usar

Para clonar, rodar e realizar deploy dessa aplicação, você irá precisar de [Git](https://git-scm.com), [Docker](https://www.docker.com/) e [Docker-Compose](https://docs.docker.com/compose/)

### Configurar VSCode

Configure o conda do projeto

```sh
conda create -n mystique python=3.8
```

### Adicione variáveis de ambiente

```sh
touch .env
echo <sua-envkey> > .env
```

### Executar o Projeto

No seu terminal:

```sh
sudo docker-compose up
```

## Popule a base de dados

```sh
sudo docker-compose exec mystique bash

python src/manage.py shell

from scripts import PopulateDB
PopulateDB()
```

## Criando uma migração

```sh
sudo docker-compose exec mystique bash
python src/manage.py makemigrations
```

## Aplicando uma migração

```sh
sudo docker-compose exec mystique bash
python src/manage.py migrate
```

## Instalando novas libs

```sh
# Tenha certeza que tem todas as libs instaladas
pip install -r requirements.txt

# Instale a nova lib
pip install novalib

# Salve as libs no arquivo
pip freeze > requirements.txt

# Para a lib ser instalada no seu container será necessário rebuildar
docker-compose stop
docker-compose up --build
```

## Testando

- Rodar os testes
- `docker-compose exec mystique bash`
- `doppler run -- pytest`

- Simular uma requisição na API, basta adicionar `client: TestClient` no parâmetro do método

```python
from pytest.test_client import TestClient
def test_nome_da_funcao(client: TestClient):
    response = client.get('/auth/status/)
    print(response.status_code)
    print(response.json())
```

## Acessando o banco de dados pelos pgadmin

- Subir o docker
- Acessar http://localhost:8080/
- Preencher
    - username: `mystique@usezapay.com.br`
    - password: `zapay_pass`
- Em `Servers` clique com o direito do mouse -> Create -> Server
    - Em `Name` coloque `Mystique`
    - Na Aba `Connection`
        - Em `Host` coloque `mystique-postgres`
        - Em `Maintenance database` coloque `mystique_db`
        - Em `Username` coloque `zapay`
        - Em `Password` coloque `zapay`
            - Clique em `Save password`
    - Agora clique em `Save`
- Vai aparecer dentro de `Servers` o BD `Mystique`
    - Dentro dele terá o nosso BD `mystique_db`
    - Para acessar as tabelas dentro de `mystique_db` faça
        - Abra `Schemas` -> `public` -> `Tables`
