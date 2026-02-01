# QHP Demo Server Configuration

## Server Overview

This server hosts AI demonstrations for the QHP Capital GP/OP pursuit. The Azurity O2E platform already runs here.

## SSH Access

```
[CREDENTIALS TO BE ADDED]
```

## PostgreSQL

```
[CREDENTIALS TO BE ADDED]
```

## Redis

```
[CREDENTIALS TO BE ADDED]
```

---

## ⚠️ DO NOT TOUCH - Azurity O2E Resources

| Resource | Value | Notes |
|----------|-------|-------|
| Port | 8010 | O2E API runs here |
| Directory | `/opt/azurity-o2e/` | All O2E code/data |
| Database | `azurity_o2e` | Do not query/modify |
| Redis DB | 2 | O2E cache |
| Systemd Service | `azurity-o2e.service` | Do not restart |
| Nginx config | `/etc/nginx/sites-available/azurity-o2e` | Do not modify |

**O2E Live URL**: [http://107.172.187.251/](http://107.172.187.251/)

---

## Safe Resources for New QHP Projects

| Resource | Recommendation |
|----------|----------------|
| Ports | Use 8020+, 3002+, 5000+ (avoid 8005, 8010, 3000, 3001) |
| Directory | Create in `/opt/your-project-name/` |
| Database | Create new database (not `azurity_o2e` or `haiti_intelligence`) |
| Redis DB | Use DB 3+ (0, 1, 2 are taken) |
| Systemd | Create your own service file |

---

## Rules for Playing Nice

1. **Don't restart nginx globally** - use `nginx -t && systemctl reload nginx` if adding your own config
2. **Don't run `apt upgrade`** - could break dependencies
3. **Don't modify `/etc/postgresql/`** - create databases via `psql`
4. **Check ports before binding**: `ss -tlnp | grep :YOUR_PORT`
5. **Use separate virtual environments** - don't install into system Python

---

## Quick Setup for New Project

```bash
# 1. Create project directory
sudo mkdir -p /opt/qhp-demo/
sudo chown $USER:$USER /opt/qhp-demo/

# 2. Create Python virtual environment
cd /opt/qhp-demo/
python3 -m venv venv
source venv/bin/activate

# 3. Create PostgreSQL database
sudo -u postgres psql -c "CREATE DATABASE qhp_demo;"

# 4. Create systemd service (example)
sudo nano /etc/systemd/system/qhp-demo.service

# 5. Create nginx config
sudo nano /etc/nginx/sites-available/qhp-demo
sudo ln -s /etc/nginx/sites-available/qhp-demo /etc/nginx/sites-enabled/
nginx -t && sudo systemctl reload nginx
```

---

## Planned QHP Demonstrations

| Demo | Port | Database | Directory | Status |
|------|------|----------|-----------|--------|
| QHP Main Demo | 8020 | `qhp_demo` | `/opt/qhp-demo/` | Planned |
| (TBD) | 8021 | TBD | TBD | - |

---

*This file contains sensitive server information. Do not commit credentials to version control.*
