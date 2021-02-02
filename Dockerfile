FROM mysql:5.6.51

# MYSQL_ROOT_PASSWORD:  PARA UN ENTORNO
# PRODUCCIÓN DEBERIA DE SER  PASADA POR UN SECRET

LABEL mail="moisescaicedo15@gmail.com"
LABEL name="Moises David Caicedo Corena"

ENV MYSQL_USER=USER_NOTE
ENV MYSQL_PASSWORD=YOUR_PASS
ENV MYSQL_DATABASE=NOTE_DEV
# ENV MYSQL_ROOT_PASSWORD=YOUR_PASS_ROOT
ENV MYSQL_RANDOM_ROOT_PASSWORD=YES
COPY ./scriptSql/ /docker-entrypoint-initdb.d
EXPOSE 3306:3306