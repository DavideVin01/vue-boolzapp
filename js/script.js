console.log('VUE READY', Vue);
Vue.config.devtools = true;

const root = new Vue ({
    el: '#root',
    data: {
      newMessage: '',
      currentIndex: 0,
      user: {
        name: 'Davide',
        avatar: '_io'
      },
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Marco',
          avatar: '_4',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
          ],
        },
        {
          name: 'Giuseppe',
          avatar: '_5',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Vuoi venire domani al cinema?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Volentieri!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_6',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Ciao Davide, ti va di fare i compiti assieme domani?',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Certo, ti va bene per le 16:00?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Alle 16:00 è perfetto, a domani!',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'A domani!',
            status: 'sent'
          },
          ],
        },
        {
          name: 'Paola',
          avatar: '_7',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Ciao Paola, come va la febbre?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ciao Davide, purtroppo ancora male..',
            status: 'received'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Mi spiace.. riprenditi presto!',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Grazie mille!!',
            status: 'received'
          },
          ],
        },
        {
          name: 'Salvatore',
          avatar: '_8',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Ciao Salvo, oggi puoi tenermi il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Oggi ho un colloquio importante e devo uscire di casa',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ciao Davide',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Mi spiace, oggi sono al cinema',
            status: 'received'
          },
          ],
        },
      ],
    },
    methods: {
      addMessage(currentIndex){
        let newMessage = this.newMessage.trim();
        if (newMessage){
            this.contacts[currentIndex].messages.push({date: '10/01/2020 15:30:55', text: newMessage, status: 'sent'});
            setTimeout(function (currentIndex) {
              newMessage = 'Ok';
              this.contacts[currentIndex].messages.push({text: newMessage});
              // alert('g')
          }, 1000);
        }
        this.newMessage = '';
      },
      changeContact(index){
        this.currentIndex = index;
      },
      isActive(index){
        return index === this.currentIndex;
      },
    },
});

//Rifare commit dove ripristino isActive come prima