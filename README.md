# CPB Cochonstitution

Ce dépôt contient le règlement interne du groupe **CPB Handball 4-5**.

Le document de référence est [REGLEMENT.md](REGLEMENT.md). C'est la version qui fait foi : toute modification du règlement passe par ce fichier.

## Contribuer

Le règlement se gère comme du code : on discute avant de changer, et on garde une trace de chaque décision.

- **Nouvelle idée ou proposition** (à débattre avant rédaction) → ouvrir une [issue](../../issues/new).
- **Amendement ou nouvelle règle** (déjà rédigée) → ouvrir une [Pull Request](../../pulls) qui modifie [REGLEMENT.md](REGLEMENT.md). La discussion et la validation se font dans la review de la PR avant de merger sur `main`.

L'historique Git sert ainsi de journal officiel des évolutions du règlement, saison après saison.

## Générer le PDF

Le règlement est rédigé en Markdown pour rester facile à modifier et à comparer (diff) sur GitHub, mais la version distribuée aux joueurs reste un PDF, avec une mise en page proche de l'ancien règlement Word (A4, police Arial, titres verts).

```bash
cd tools
npm install
npm run generate
```

Le PDF est généré dans `data/REGLEMENT.pdf`. Sous le capot, le script ([tools/generate-pdf.js](tools/generate-pdf.js)) convertit `REGLEMENT.md` en PDF avec [`md-to-pdf`](https://github.com/simonhaenisch/md-to-pdf) en appliquant la feuille de style [`tools/pdf/style.css`](tools/pdf/style.css), qui fixe le format A4, la police et les couleurs des titres.
