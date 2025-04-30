# 🧮 Simple Calculator

> A desktop calculator built with HTML, Tailwind CSS v4, JavaScript and Electron.  
> Lightweight, easy to extend, and perfect for learning modern front-end workflows.

---

## 📂 Repository Structure


├── .gitignore<br>
├── README.md<br>
├── package.json<br>
├── tailwind.config.js<br>
├── postcss.config.js<br>
├── input.css<br>
├── output.css<br>
├── index.html<br>
├── script.js<br>
├── main.js             # Electron entry point<br>
└── dist/               # ⚠ Build output (ignored in Git)<br>


- *input.css* — your Tailwind directives (@import "tailwindcss";)  
- *output.css* — compiled Tailwind CSS (built artifact)  
- *index.html, **script.js* — calculator UI & logic  
- *main.js* — Electron “main” process (app window, packaging)  
- *dist/* — packaged Electron app (exe installers), auto-generated  

---

## 🚀 Quickstart

### 1. Clone the repo  
```bash
git clone https://github.com/pixelpioneer404/simple-calculator.git
cd simple-calculator
```


### 2. Install dependencies  
```bash
npm install
```


This will install:  
- Tailwind CSS CLI  
- PostCSS  
- Electron  

### 3. Build your CSS  
Compile Tailwind from input.css → output.css (with watcher):  
```bash
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```


### 4. Run in development  
Launch the Electron app pointing at your local files:  
```bash
npm run start
```

### 5. Generate the build  
Generate the .exe file of the calculator:  
```bash
npm run build
```


> *Note*: npm run start should map to something like  
> json
> "scripts": {
>   "start": "electron ."
> }
> 

### 6. Package for distribution  
Create your executable in dist/:  
bash
npm run build


> *Tip*: Adjust your Electron‐packager or Electron‐builder config in package.json as needed.

---

## ⚙ Scripts

| Script         | Command                                            | What it does                          |
| -------------- | -------------------------------------------------- | ------------------------------------- |
| npm install  | —                                                  | Installs all dependencies             |
| npm run start| electron .                                       | Launches the app in development mode  |
| npm run build| Electron builder/packager command                  | Outputs installer/executable into dist/ |
| npm run css  | tailwindcss -i ./input.css -o ./output.css       | Generates one-off CSS build           |
| npm run watch| tailwindcss -i ./input.css -o ./output.css --watch | Rebuilds CSS on file changes          |

---

## 🤝 Contributing

1. Fork it  
2. Create your branch: git checkout -b feature/add-buttons  
3. Commit your changes: git commit -m "Add memory buttons"  
4. Push to the branch: git push origin feature/add-buttons  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)  
- [Electron](https://www.electronjs.org/)  
- Inspired by countless online tutorials on building desktop apps with web tech  

---

*Enjoy!* 🎉  
If you run into any issues, feel free to open an issue or drop me a line.
