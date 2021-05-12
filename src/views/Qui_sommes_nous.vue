<template>
        <HeaderBlanc/> 
        <main class="font-body">
            <div>
                <div class="h-full">
                    <h1 class="text-5xl text-blue font-bold uppercase md:text-6xl mt-5 md:m-14 h-auto">
                    L'ASSOCIATION
                    </h1>
                    <div class="w-11/12 md:w-9/12 text-left mx-auto my-10">
                        <div class="my-10">
                            <h2 class="font-bold text-blue text-xl m-2">
                            Bienvenue sur Les Deux Paumes !
                            </h2>
                            <p class="text-black font-medium mb-5">
                                Basée à Lyon, l’association Les Deux Paumes est née en janvier 2021 à la suite d’une vidéo virulente sur les réseaux sociaux d’une petite fille traduisant un dessin animé à son petit frère. Afin d’apprendre et communiquer pendant le confinement, nous avons voulu proposer du contenu vidéo innovant, ludique mais surtout signé pour les enfants sourds et malentendants de 3-12 ans. Odilia et son équipe ont créé Les Deux Paumes dans un esprit ludique, ouvert à tous en proposant différentes activités.  
                            </p>
                        </div>
                        <div class="my-10">
                            <h2 class="font-bold text-blue text-xl m-2">
                            Une Approche Innovante et Ludique
                            </h2>
                            <p class="text-black-500 font-medium mb-5">
                                    Notre objectif est de créer un espace dédié où l’enfant pourra se divertir et apprendre en s’amusant Depuis la crise du Covid-19, les difficultés de communication par le port généralisé du masque entrainent un isolement ou un sentiment de solitude chez les personnes sourdes et malentendantes. Nous sommes soucieux de faire tomber les barrières de la différence en proposant un contenu accessible en Langue des Signes Française comme outil de communication et de loisirs.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-gray-50 mb-10 py-8">
                    <h2 class="text-4xl text-blue font-bold mb-8">
                        L'équipe : 
                    </h2>
                    <div v-if="teammates" class="flex flex-wrap justify-between">
                        <div v-for="teammate in teammates" :key="teammate.name" class="mx-5 w-2/12 min-w-full md:min-w-0">
                            <img :src='teammate.img' :alt="teammate.name" class="md:w-44 md:h-44 w-32 h-32 rounded-full mx-auto">
                            <h3 class="mt-2 text-black font-medium text-xl">{{ teammate.name }}</h3>
                            <h3 class="text-black font-regular">{{ teammate.poste }}</h3>
                        </div>
                    </div>
                </div>
            </div> 
        </main>
        <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue'
import HeaderBlanc from '../components/HeaderBlanc.vue'

// @ is an alias to /src

export default {
    name: 'Qui_sommes_nous',
    components: {
        HeaderBlanc,
        Footer,
    },
    data() {
        return {
        teammates: [
            { name: 'Maeliss', poste: 'Chargée de partenariat et étudiante en webmarketing', img: 'https://i.ibb.co/XtPmKnT/maeliss.jpg'},
            { name: 'Alice', poste: 'Chargée de développement et étudiante en webmarketing', img: 'https://i.ibb.co/N993qJn/alice.jpg'},                
            { name: 'Alex', poste: 'Trésorier et étudiant en Webdeveloppement', img: 'https://i.ibb.co/87WKYND/alex.jpg'},
            { name: 'Odilia', poste: 'Fondatrice, présidente et étudiante en  Webdesign', img: 'https://i.ibb.co/VVhCDr9/odilia.jpg'},
            { name: 'Chloe', poste: 'Vice-Présidente et étudiante en Webdesign', img: 'https://i.ibb.co/8s70ZWF/chloe.jpg'},
        ],
        }
    },
}
</script>