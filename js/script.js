var app = new Vue({

    el: "#app",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
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
                random: [
                    {
                        date: "",
                        text: "Ciao",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Non credo di aver capito",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ah ah ah",
                        status: "received"
                    }, 
                    {
                        date: "",
                        text: "Ci sarò",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Giochiamo",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Guardiamo la partita",
                        status: "received"
                    },
                ]
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
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
                random: [
                    {
                        date: "",
                        text: "Ciao",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Non credo di aver capito",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ah ah ah",
                        status: "received"
                    }, 
                    {
                        date: "",
                        text: "Ci sarò",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Giochiamo",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Guardiamo la partita",
                        status: "received"
                    },
                ]
            },     
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
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
                random: [
                    {
                        date: "",
                        text: "Ciao",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Non credo di aver capito",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ah ah ah",
                        status: "received"
                    }, 
                    {
                        date: "",
                        text: "Ci sarò",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Giochiamo",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Guardiamo la partita",
                        status: "received"
                    },
                ]
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
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
                random: [
                    {
                        date: "",
                        text: "Ciao",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Non credo di aver capito",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ah ah ah",
                        status: "received"
                    }, 
                    {
                        date: "",
                        text: "Ci sarò",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Giochiamo",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Guardiamo la partita",
                        status: "received"
                    },
                ]
            },
        ],
        contactIndex: 0,
        newMessage: "",
        newDate: "",
        
    },
    mounted: function () {
        this.newDate = dayjs().format('DD/MM/YY HH:mm:ss')
    },
    methods: {
        getImage: function (index) {
            return "img/" + "avatar" + this.contacts[index].avatar + ".jpg";
        },
        getAlt: function (index) {
            return this.contacts[index].name;
        },
        getContact: function (index) {
            return this.contactIndex = index;
        },
        getLast: function (contact) {
            let lastMessage = contact.messages.length - 1;
            return contact.messages[lastMessage];
        },
        sendMessage: function () {
            if (this.newMessage.trim().length > 0) {
                this.contacts[this.contactIndex].messages.push({
                    date: this.newDate,
                    text: this.newMessage,
                    status: 'sent'
                })
            }
            this.newMessage = "";
        },
        getRandomAnswer: function () {
            const randomAnswer = this.contacts[this.contactIndex].random[Math.floor((Math.random() * (5 - 0 + 1)) + 0)].text;

            let x = this.contacts[this.contactIndex].messages.push({date: dayjs().format('DD/MM/YY HH:mm:ss'),text: randomAnswer, status:'received'});
            return x;
        },
        botMessage: function() {
            let x = this
           setTimeout(function(){ 
               x.getRandomAnswer();
           }, 1000);
       },
      
    }

});