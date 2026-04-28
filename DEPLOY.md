# Деплой Arvexo на VPS

## Вариант через Docker

1. Установите на сервер Docker и Docker Compose plugin.
2. Скопируйте проект на сервер или клонируйте репозиторий.
3. В корне проекта выполните:

```bash
docker compose up -d --build
```

После запуска приложение будет доступно на `http://SERVER_IP:3000`.

## Nginx перед приложением

1. Скопируйте пример конфига:

```bash
sudo cp deploy/nginx/arvexo.conf.example /etc/nginx/sites-available/arvexo
```

2. Проверьте, что в конфиге указан домен `arvexo.ru`.
3. Включите сайт и проверьте конфиг:

```bash
sudo ln -s /etc/nginx/sites-available/arvexo /etc/nginx/sites-enabled/arvexo
sudo nginx -t
sudo systemctl reload nginx
```

4. Для HTTPS выпустите сертификат, например через Certbot:

```bash
sudo certbot --nginx -d arvexo.ru -d www.arvexo.ru
```

## Обновление

```bash
git pull
docker compose up -d --build
docker image prune -f
```

## CI/CD через GitHub Actions

Workflow лежит в `.github/workflows/deploy.yml`.

Он запускается при push в ветку `main` и вручную через `workflow_dispatch`.

Добавьте в GitHub repository secrets:

```text
DEPLOY_HOST=SERVER_IP
DEPLOY_USER=root
DEPLOY_PORT=22
DEPLOY_PATH=/var/www/arvexo
DEPLOY_SSH_KEY=приватный SSH-ключ для доступа к серверу
```

На сервере заранее должны быть установлены Docker и Docker Compose plugin.

Первичная подготовка директории:

```bash
sudo mkdir -p /var/www/arvexo
sudo chown -R $USER:$USER /var/www/arvexo
```

После этого каждый push в `main` будет собирать проект, синхронизировать файлы на сервер и перезапускать контейнер.

## Локальная production-проверка

Если Node.js установлен локально:

```bash
npm ci
npm run build
npm run start
```
