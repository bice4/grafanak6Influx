# K6 with Grafana/InfluxDb
---
>Medium guide [link](https://medium.com/@nairgirish100/k6-with-docker-compose-influxdb-grafana-344ded339540)


## How-to
1. Run ``docker-compose up -d influxdb grafana``
2. Open in browser http://localhost:3000/login (Grafana UI)
3. Setup datasource (check original link guide)
4. Run ``cd k6``
5. Prepare k6 script
6. ``k6 run --out influxdb=http://localhost:8086 script.js``


>When finish run ``docker-compose down``
Data from the previous run **WILL BE REMOVED**
---
## Useful

>**Default login credentials for Grafana**
Username: admin
Password: admin

>**Influx datasource info**
URL: http://influxdb:8086
Database name: k6

>**Grafana dashboard ID for k6**
In the Import page, we will use **ID: 2587** which is a pre-configured dashboard available for k6 load tests in Grafana.