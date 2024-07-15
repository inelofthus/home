---
title: "Flere gitbrukere"
pubDate: 2024-07-14
description: "Hvordan sette opp ssh og git config med flere eposter på samme maskin"
author: "Ine Lofthus Arnesen"
tags: ["git", "ssh", "gitconfig"]
---
For at dette skal fungere må man huske å klone repoet med riktig host, og legge repoet i riktig mappe. F.eks., dersom jeg ønsker å bruke NAV-eposten, vil jeg måtte endre den relevante delen av ssh-url-en fra `github.com` til `github.com-nav` når jeg kloner repoet, og legge repoet i `~/nav/`-mappen.
## SSH
### 1. Opprett ssh-nøkler
Opprett én ssh-nøkkel per epost. Husk å gi dem et unikt navn, f.eks. `id_rsa_nav`. Husk å legge inn disse på github/bitbucket etc.
### 2. Oppdater ssh-config
Map host mot riktig ssh-nøkkel.

`vi ~/.ssh/config`

Eksempelinnhold: 
```
# Clave
Host github.com-clave
  HostName github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
# Nav
Host github.com-nav
  HostName github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa_nav
```

**_MERK:_** AddKeysToAgent er OSX-spesifikt.

## Gitconfig

1. Opprett én gitconfig per epost. F.eks. `touch ~/.gitconfig-nav` for NAV-epost:
```
[user]
  name = Ine Lofthus Arnesen
  email = ine.lofthus.arnesen@nav.no
```
2.  Oppdater .gitconfig (`vi ~/.gitconfig`) med mapping mellom mappe og korrekt gitconfig-fil
```
[includeIf "gitdir:~/clave/"]
  path = ~/.gitconfig-clave
[includeIf "gitdir:~/nav/"]
  path = ~/.gitconfig-nav
```

