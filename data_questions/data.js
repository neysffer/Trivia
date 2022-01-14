const level_one = [
    {
        category : "Ciencia",
        quest : "2 * 4 = ? ",
        quest_true :  "8",
        options : ["10", "2", "8", "5"]
    },
    {
        category : "Historia",
        quest : "¿En qué año descubrió Cristóbal Colón, América?",
        quest_true : "1492",
        options : ["1489", "1491", "1592", "1492"]
    },
    {
        category : "Arte",
        quest : "¿Quién pintó la Monna Lisa?",
        quest_true : "Leonardo da Vinci",
        options : ["Leonardo DiCaprio", "Leonardo da Vinci", "Picasso", "Miguel Ángel"]
    },
    {
        category : "Entretenimiento",
        quest : "¿En qué pelicula hay una academia de monstruos?",
        quest_true : "Monsters Inc",
        options : ["Monsters Inc", "Naruto", "Barbie escuela de princesas", "Enredados"]
    },
    {
        category : "Deportes",
        quest : "¿Quién es Messi?",
        quest_true : "Un futbolista",
        options : ["Comediante", "Un futbolista", "Jugador de Tenis", "Músico"],
    }
    
]

const level_two = [
    {
        category : "Ciencia",
        quest : "¿Qué es un agujero negro?",
        quest_true : "Objeto astronómico con una fuerza gravitatoria tan fuerte que nada puede escapar de él",
        options : ["Un punto negro", "Objeto astronómico con una fuerza gravitatoria tan fuerte que nada puede escapar de él", "Bola de masa en el espacio", "Una comida italiana"]
    },
    {
        category : "Historia",
        quest : "¿A qué emperador romano asesinó un grupo de senadores?",
        quest_true : "Julio César",
        options : ["Augusto", "Tiberio", "Nerón", "Julio César"]
    },
    {
        category : "Arte",
        quest : "¿En que museo está la Mona Lisa?",
        quest_true : "Museo de Louvre",
        options : ["Museo del Prado", "Museo de Artee Moderno", "Museo de Louvre", "Metropolitan Museum Of Arte"]
    },
    {
        category : "Entretenimiento",
        quest : "¿En qué estudio de animación aparece mucho una lámpara?",
        quest_true : "Pixar",
        options : ["Studio Ghibli", "Pixar", "Wit", "Mappa"]
    },
    {
        category : "Deportes",
        quest : "¿Qué equipo ganó la Copa Mundial de Fútbol de 1950?",
        quest_true : "Uruguay",
        options : ["Uruguay", "Brasil", "Argentina", "Japón"]
    }
]

const level_three = [
    {
        category : "Ciencia",
        quest : "¿Por qué el cielo es azul?",
        quest_true : "Por la Disperción",
        options : ["Por la Disperción", "Por la Reflexión", "Por el aire", "Por la Distención"]
    },
    {
        category : "Historia",
        quest : "¿De qué nacionalidad era Juana de Arco?",
        quest_true : "Francesa",
        options : ["Alemana", "Polaca", "Canadiense", "Francesa"]
    },
    {
        category : "Arte",
        quest : "¿En que siglo nació Van Gogh?",
        quest_true : "XIX",
        options : ["XX", "XV", "XIX","XXI"]
    },
    {
        category : "Entretenimiento",
        quest : "¿Qué estudio de animación se encargo de Big Hero 6?",
        quest_true : "Walt Disney Animation Studios",
        options : ["Walt Disney Animation Studios", "Studio Ghibli", "Wit", "Mappa"]
    },
    {
        category : "Deportes",
        quest : "¿Qué significa NBA?",
        quest_true : "National Basketball Association",
        options : ["National Bad Association", "National Badass Association", "National Basketball Association","National Banglasesh Association"]
    }

]

const level_four = [
    {
        category : "Ciencia",
        quest : "Los cromosomas están formados por:",
        quest_true : "ADN",
        options : ["Proteínas", "Agua", "ARN", "ADN"]
    },
    {
        category : "Historia",
        quest : "¿Quienes eran los templarios?",
        quest_true : "Era una orden religiosa y militar",
        options : ["Era una orden religiosa y militar", "Una orden religiosa", "Una orden militar", "Una banda de rock"]
    },
    {
        category : "Arte",
        quest : "La piedad es una escultura de:",
        quest_true : "Miguel Ángel",
        options : ["Donatello", "Miguel Ángel", "Picasso", "Vincent van Gogh"],
    },
    {
        category : "Entretenimiento",
        quest : "¿Quién es el creador de Spiderman?",
        quest_true : "Stan Lee y Steve Ditko",
        options : ["Stan Lee", "Steve Ditko", "Masashi Kishimoto", "Stan Lee y Steve Ditko"],
    },
    {
        category : "Deportes",
        quest : "¿Qué jugador de la NBA ha ganado más campeonatos en la historia?",
        quest_true : "Bill Russell",
        options : ["Bill Russell", "Xavier Tillman", "Kevin Durant", "James Harden"],
        
    }
]

const level_five = [
    {
        category : "Ciencia",
        quest : "¿Qué ocurriría si una fuerza irresistible se enfrentase con un cuerpo inamovible?",
        quest_true : "Carece de sentido",
        options : ["Carece de sentido", "No pasa nada", "Se mueve el objeto", "Se destruye el objeto"]

    },
    {
        category : "Historia",
        quest : "¿Cómo comenzó la Primera Guerra Mundial?",
        quest_true : "Con el asesinato del archiduque Francisco Fernando",
        options : ["Con el asesinato del archiduque Francisco Fernando", "Con el intento de asesinato del príncipe belga Leopold", "Con la batalla de Gallipoli", "Por diferencias políticas"]
    },
    {
        category : "Arte",
        quest : "¿Qué nombre recibe el estilo arquitectónico de las construcciones árabes en la península?",
        quest_true : "Mozárabe",
        options : ["Arabesco", "Mozárabe", "Nazarí", "Arábigo"]
    },
    {
        category : "Entretenimiento",
        quest : "¿Quién fue Stan Lee?",
        quest_true : "Editor de cómics",
        options : ["Comediante", "Editor de cómics", "Cantante", "Músico"]
    },
    {
        category : "Deportes",
        quest : "¿Cuánto duró el partido de tenis más largo de la historia?",
        quest_true : "11 horas",
        options : ["14 horas", "5 horas", "8 horas", "11 horas"]
    }
]
//Exporto cada nivel con sus preguntas dentro de un arreglo de objetos
export const data = [
    level_one,
    level_two,
    level_three,
    level_four,
    level_five
]