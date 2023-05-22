# Considere que durante o build podemos estar em estágios diferentes, 
# e neste caso nós acabamos de nomear o estágio atual para primeiro-estagio;
# Dar nome aos estágios será útil para nós mais adiante, porém neste caso não tem efeito algum.
FROM nginx:1.21.3-alpine AS primeiro-estagio

# A palavra reservada WORKDIR indica para o Docker qual é a pasta atual de trabalho dentro da imagem;
# Ou seja, nas próximas ações deste build e também quando essa imagem for executada como um container,
# estaremos no caminho especificado pelo WORKDIR
WORKDIR /site

# Aqui copiamos os três arquivos no formato de pastas que o Hugo espera que estes arquivos estejam;
COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md


# A palavra reservada RUN indica que o comando à frente deve ser executado imediatamente, durante o processo de build.
RUN apk add hugo
RUN hugo --minify --gc

# A palavra reservada ENTRYPOINT indica para o Docker qual comando deve ser executado ao iniciar o container.
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Segundo Estágio
FROM nginx:1.21.3-alpine AS segundo-estagio
COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]