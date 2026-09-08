# CPB Cochonstitution

Ce dépôt contient le règlement interne du groupe **CPB Handball 4-5**.

Le document de référence est [REGLEMENT.md](REGLEMENT.md). C'est la version qui fait foi : toute modification du règlement passe par ce fichier.

## Contribuer

Le règlement se gère comme du code : on discute avant de changer, et on garde une trace de chaque décision.

- **Nouvelle idée ou proposition** (à débattre avant rédaction) → ouvrir une [issue](../../issues/new).
- **Amendement ou nouvelle règle** (déjà rédigée) → ouvrir une [Pull Request](../../pulls) qui modifie [REGLEMENT.md](REGLEMENT.md). La discussion et la validation se font dans la review de la PR avant de merger sur `main`.

L'historique Git sert ainsi de journal officiel des évolutions du règlement, saison après saison.

## Générer le PDF

Le règlement est rédigé en Markdown pour rester facile à modifier et à comparer (diff) sur GitHub, mais la version distribuée aux joueurs reste un PDF, dans le même esprit que [`data/[CPB4-5] Saison 26-27 - Réglement interne.pdf`](data/[CPB4-5]%20Saison%2026-27%20-%20Réglement%20interne.pdf) (A4, police Arial/sans-serif, mise en page sobre).

Principe : `REGLEMENT.md` → HTML (via un moteur Markdown) → PDF (via un moteur de rendu qui imprime le HTML), en appliquant une feuille de style CSS qui reproduit la charte du document Word original (taille A4, marges, police, titres).

Deux façons de faire, sans dépendre de Word :

- **`md-to-pdf`** (Node, se lance avec `npx` sans installation globale — pratique ici puisque Node est déjà disponible) :

  ```bash
  npx md-to-pdf REGLEMENT.md --stylesheet tools/pdf/style.css
  ```

  `md-to-pdf` s'appuie sur Chromium (Puppeteer) pour convertir le HTML rendu en PDF, ce qui donne un contrôle CSS complet (police, page-break, en-tête/pied de page).

- **`pandoc`** (nécessite une installation, ex. `sudo dnf install pandoc` + un moteur PDF comme `wkhtmltopdf` ou une distribution LaTeX) :

  ```bash
  pandoc REGLEMENT.md -o REGLEMENT.pdf --pdf-engine=wkhtmltopdf --css tools/pdf/style.css
  ```

Dans les deux cas, l'idée est la même : la feuille de style [`tools/pdf/style.css`](tools/pdf/style.css) fixe le format A4, la police et les marges pour que le PDF généré ressemble à l'original, tout en gardant le Markdown comme unique source de vérité versionnée.
