// Homepage Interface Declaration
interface Settings {
    readonly theme: boolean;
    font: string 
}

// Articles Page Interface Reopening
interface Settings {
    sidebar: boolean
}

// Contact Page Interface Reopening
interface Settings {
    external: boolean;
}

let userSettings: Settings = {
    theme : true,
    font : "Sans-serif",
    sidebar: false,
    external: true

}