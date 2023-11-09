# K6 with Grafana/InfluxDb
---

## How-to
1. Run ``docker-compose up -d``
2. Open in browser http://localhost:3000 (Grafana UI)
3. Run ``cd k6``
4. Prepare k6 script
5. ``k6 run --out influxdb=http://localhost:8086 script.js``


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

>**Grafana dashboard ID for k6 ID: 2587**
