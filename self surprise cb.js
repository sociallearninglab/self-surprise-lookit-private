function generateProtocol(child, pastSessions) {
    let options = ['surprising', 'unsurprising'];
    let condition = options[Math.floor(Math.random() * options.length)];
    console.log('Condition:', condition);

    if (condition === 'surprising') {
        return {
            frames: {
                'welcome': {
                    'kind': 'exp-lookit-text',
                    'blocks': [
                        {
                            'title': 'Welcome!'
                        },
                        {
                            'text': 'Thank you for your interest in our study, \'Imagine That!\'.'
                        },
                        {
                            'text': 'Here\'s a quick summary of what\'s about to happen:'
                        },
                        {
                            'text': '1. Webcam Setup and Video Consent: First, we\'ll be checking that your webcam is working. Then you and your child will give your consent to participate in this research.'
                        },
                        {
                            'text': '2. Study Overview and Important Message for Parents: Here, you can read a little more about what your child will be doing in this study, along with some other important details about the game.'
                        },
                        {
                            'text': '3. Start the Study: When you click the \'Start the game!\' button, the study will begin! This study will take about 15 minutes in total.'
                        },
                        {
                            'text': 'Thank you so much for helping us with our science! We hope you and your child have fun.'
                        }
                    ],
                    'showPreviousButton': false
                },
                'video-config': {
                    'kind': 'exp-video-config',
                    'troubleshootingIntro': 'If you\'re having any trouble getting your webcam set up, please feel free to call the Social Learning Lab at (650) 498-7832 and we\'d be glad to help you out!'
                },
                'video-consent': {
                    'kind': 'exp-lookit-video-consent',
                    'template': 'consent_005',
                    'PIName': 'Hyowon Gweon',
                    'institution': 'Stanford University',
                    'PIContact': 'Hyowon Gweon at hyo@stanford.edu',
                    'purpose': 'Can children be surprised by what appear to be the outcomes of their own actions? This study will help us find out whether children can reason about themselves as causal agents in a way complex enough to include surprise.',
                    'procedures': 'Your child will be shown pictures of different kinds of cards and asked to select certain ones. We are interested in your child\'s reaction to the results of their selections. We will ask you (the parent) to let your child make their own decisions. We also ask that you refrain from influencing their response by expressing an emotional reaction of your own.',
                    'risk_statement': 'There are no expected risks if you participate in the study.',
                    'voluntary_participation': 'Participation in this study is entirely optional, and you are free to exit at any time.',
                    'payment': 'After you finish the study, we will email you a $5 ______ gift card within approximately three days. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child\'s data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.',
                    'datause': 'We are primarily interested in your child\'s emotional and verbal responses to the results of the card game. A research assistant will watch your video to assess the amount of surprise your child displays.',
                    'include_databrary': true,
                    'gdpr': false,
                    'research_rights_statement': 'You are not waiving any legal claims, rights or remedies because of your participation in this research study. If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the [IRB NAME], [INSTITUTION], [ADDRESS/CONTACT]'
                },

                'positioning': {
                    'kind': 'exp-video-config-quality',
                    'title': 'Positioning',
                    'introText': 'It\'s time to get your child & check yourself out!',
                    'showRecordMenu': false,
                    'requireTestVideo': false,
                    'completedItemText': 'Got it!',
                    'instructionBlocks': [
                        {
                            'text': 'You and your child can sit in any position.',
                            'title': 'Get comfortable'
                        },
                        {
                            'text': 'Go ahead and get settled and use the webcam preview to make sure your child\'s whole face and torso are in view.',
                            'title': 'Take a few moments'
                        },
                        {
                            'text': 'Press the \'Next\' button down below if you and your child are in position and ready to go.',
                            'title': 'When you\'re ready'
                        }
                    ],
                    'nextButtonText': 'My child and I are in position and ready to start!',
                    'showPreviousButton': true,
                    'requireItemConfirmation': true,
                    'recordingInstructionText': ''
                },
                'start-recording': {
                    'kind': 'exp-lookit-start-recording',
                    'imageAnimation': 'spin',
                    'displayFullscreen': true
                },
                'stop-recording': {
                    'kind': 'exp-lookit-stop-recording',
                    'imageAnimation': 'spin',
                    'displayFullscreen': true
                },
                'email-survey': {
                    'kind': 'exp-lookit-survey',
                    'formSchema': {
                        'schema': {
                            'type': 'object',
                            'title': 'Thank you for your participation! Please provide your email for study compensation, note your email will only be used for compensation and nothing else.',
                            'properties': {
                                'Email': {
                                    'type': 'string',
                                    'title': 'Email',
                                    'required': true
                                }
                            }
                        }
                    },
                    'nextButtonText': 'Finish Study'
                },
                
                "exit-survey": {
                    "kind": "exp-lookit-exit-survey",
                    "debriefing": {
                        "title": "Thank you for participating!",
                        "blocks": [
                            {
                                "title": "",
                                "text": "This research wouldn't be possible without awesome parents like you."
                            },
                            {
                                "title": "Some Background Information:",
                                "text": ""
                            },
                            {
                                "title": "Additional Resources:",
                                "text": ""
                            },
                            {
                                "title": "Compensation:",
                                "text": "To thank you for your participation, we'll be emailing you a $5 USD Amazon gift card - this should arrive in your inbox within the next week after we confirm your consent video and check that your child is in the age range for this study (If you don't hear from us by then, feel free to reach out!). If you participate again with another child in the age range, you'll receive one gift card per child."
                            },
                            {
                                "title": "Questions or Concerns:",
                                "text": "Please do not hesitate to contact Adani Abutto at aabutto@stanford.edu"
                            }
                        ]
                    }
                },

                

                'welcome-to-my-game': {
                    'kind': 'exp-lookit-images-audio',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main/',
                    'audio': 'majority_cards_intro',
                    'audioTypes': ['mp3'],
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'images': [
                        {
                            'id': 'welcome',
                            'src': 'background_welcome.png',
                            'position': 'fill'
                        }
                    ],
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'nextButtonText': 'Next',
                    'showPreviousButton': false,
                    'showReplayButton': true
                },
                
                
                'majority-intro-1': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'majority_dash_1',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'videoTypes': ['mp4']
                },
                
               'majority-test-win': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: "star", src: "card_star.png", left: centerOffset, top: 30, width: 15, height: 35, correct: true, feedbackAudio: "majority_cards_control_question_correct", clickable: true }); images.push({ id: "dash", src: "card_dash.png", left: centerOffset + spacing, top: 30, width: 15, height: 35, correct: false, feedbackAudio: "majority_cards_control_question_incorrect", clickable: false }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'majority_cards_control_question',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,        // This needs to be true for correctChoiceRequired to work
                    'correctChoice': 'star',          // The ID of the correct image
                    'correctChoiceRequired': true,
                    'feedbackAudio': true,
                    'nextButtonEnabled': false,
                    'maximumCorrectRequired': 1,
                    'nextButtonDelay': 'feedbackAudioEnd',
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'minDuration': 0,
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'maximumAudioImageLoop': 1,
                    'mustPlayFeedback': true,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'highlights': [
                        {
                            'range': [6, 8],
                            'imageId': 'star',
                            'color': 'blue'
                        },
                        {
                            'range': [9, 11],
                            'imageId': 'dash',
                            'color': 'blue'
                        }
                    ]
                },

    
            'majority-intro-2': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'majority_dash_2',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },

            'majority-select-1-combined': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const lastFrameId = sequence[sequence.length - 1]; const lastFrame = expData[lastFrameId]; const clickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selectedImage = clickEvents[clickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; images.push({ id: String(i + 1), src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "threecards_picking_first", highlights: selectedImage ? [{ imageId: selectedImage, range: [0, 999], color: "blue" }] : [] }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'showReplayButton': false,
                'showPreviousButton': false,
                'canMakeChoiceBeforeAudioFinished': false,
                'nextButtonDelay': 0,
                'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    }
            },

            'majority-select-2-combined': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const firstFrameId = sequence[sequence.length - 1]; const firstFrame = expData[firstFrameId]; console.log("First frame ID:", firstFrameId); console.log("First frame data:", firstFrame); console.log("Event timings:", firstFrame?.eventTimings); const clickEvents = firstFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const lastClickEvent = clickEvents[clickEvents.length - 1]; console.log("Last click event:", lastClickEvent); const lastSelection = lastClickEvent?.imageId; console.log("Last selection:", lastSelection); let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === lastSelection; images.push({ id: cardNum, src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "cards_selection_picksecond", highlights: [] }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'showReplayButton': false,
                'showPreviousButton': false,
                'canMakeChoiceBeforeAudioFinished': false,
                'nextButtonDelay': 0,
                'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    }
            },

            'majority-select-3-combined': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const secondLastFrameId = sequence[sequence.length - 2]; const lastFrameId = sequence[sequence.length - 1]; const secondLastFrame = expData[secondLastFrameId]; const lastFrame = expData[lastFrameId]; const secondLastClickEvents = secondLastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const lastClickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const secondLastSelection = secondLastClickEvents[secondLastClickEvents.length - 1]?.imageId; const lastSelection = lastClickEvents[lastClickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isPreviouslySelected = cardNum === secondLastSelection || cardNum === lastSelection; images.push({ id: cardNum, src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isPreviouslySelected, feedbackAudio: "okay_alldone" }); } return { images: images, audio: "cards_selection_picklast", highlights: [] }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'showReplayButton': false,
                'showPreviousButton': false,
                'waitForEndAudio': true,
                'canMakeChoiceBeforeAudioFinished': false,
                'nextButtonDelay': 0,
                'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    }
            },

 
               'majority-reveal-stars': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const frameIds = [sequence[sequence.length - 3], sequence[sequence.length - 2], sequence[sequence.length - 1]]; const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents[clickEvents.length - 1]?.imageId; }).filter(id => id !== undefined); let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = selections.includes(cardNum); images.push({ id: cardNum, src: isSelected ? "card_star.png" : "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selection_reveal',
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': true,
                    'showReplayButton': true,
                    'showPreviousButton': false,
                    'mustPlayCount': 1,
                    'audioTypes': ['mp3'],
                    'durationSeconds': 10,
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    }
                },

                'majority-surprise-rating-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = [{ id: "topImage", src: "selection_three_stars.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10; const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2; images.push({ id: "not_surprised", src: "surprise_scale_not_surprised.png", left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "not_surprised" }); images.push({ id: "a_little_surprised", src: "surprise_scale_a_little_surprised.png", left: startX + ratingWidth + spacing, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "little_surprised" }); images.push({ id: "very_surprised", src: "surprise_scale_very_surprised.png", left: startX + 2 * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "very_surprised" }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'allthreestars_surprise_scale',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': false,
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'durationSeconds': 10,
                    'feedbackAudio': true,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'highlights': [
                        {
                            'range': [6, 7.5],
                            'imageId': 'not_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [8, 9.5],
                            'imageId': 'a_little_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [9.5, 11],
                            'imageId': 'very_surprised',
                            'color': 'yellow'
                        }
                    ]
                },
                

               'majority-surprise-rating-why': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const previousFrameId = sequence[sequence.length - 1]; console.log("Previous frame ID:", previousFrameId); const previousFrame = expData[previousFrameId]; console.log("Previous frame data:", previousFrame); const clickEvents = previousFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; console.log("Click events:", clickEvents); const previousSelection = clickEvents[clickEvents.length - 1]?.imageId; console.log("Previous selection:", previousSelection); let audioToPlay = previousSelection === "not_surprised" ? "not_surprised_why" : previousSelection === "a_little_surprised" ? "little_surprised_why" : "very_surprised_why"; let imageToShow = previousSelection === "not_surprised" ? "surprise_scale_not_surprised.png" : previousSelection === "a_little_surprised" ? "surprise_scale_a_little_surprised.png" : "surprise_scale_very_surprised.png"; console.log("Selected image to show:", imageToShow); let images = [{ id: "topImage", src: "selection_three_stars.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }, { id: "selected_rating", src: imageToShow, left: 40, top: 50, width: 20, height: 35, nonChoiceOption: true }]; console.log("Generated images:", images); return { images: images, audio: audioToPlay }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': true,
                    'durationSeconds': 10,
                    'showPreviousButton': false,
                    'showReplayButton': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    }
                },
                
                
                'majority-surprise-how': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const lastFrameId = sequence[sequence.length - 2]; const lastFrame = expData[lastFrameId]; const clickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selectedImage = clickEvents[clickEvents.length - 1]?.imageId || "not_surprised"; let images = [{ id: "topImage", src: "selection_three_stars.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: "surprise_scale_" + selectedImage + ".png", left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: "majority_cards_selection_how" }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'autoProceed': false,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': false,
                    'durationSeconds': 10,
                    'showPreviousButton': false,
                    'showReplayButton': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    }
                },
                
                
                'majority-transition': {
                        'kind': 'exp-lookit-video',
                        'video': {
                            'top': 0,
                            'left': 0,
                            'width': 100,
                            'source': '3_stars_majority_transition',
                            'loop': false
                        },
                        'backgroundColor': 'black',
                        'autoProceed': false,
                        'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        },
                        'showPreviousButton': false,
                        'showReplayButton': false,
                        'doRecording': false,
                        'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                        'videoTypes': ['mp4']
                    },

                    'minority-intro-0': {
                        'kind': 'exp-lookit-video',
                        'video': {
                            'top': 0,
                            'left': 0,
                            'width': 100,
                            'source': 'minority_transition_video',
                            'loop': false
                        },
                        'backgroundColor': 'black',
                        'autoProceed': false,
                        'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        },
                        'showPreviousButton': false,
                        'showReplayButton': true,
                        'doRecording': false,
                        'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                        'videoTypes': ['mp4']
                    },

                'minority-intro-1': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'minority_surprising_1',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                
                  'minority-test-win': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: "sun", src: "card_sun.png", left: centerOffset, top: 30, width: 15, height: 35, correct: true, feedbackAudio: "minority_cards_control_question_feedback_correct" }); images.push({ id: "dash", src: "card_dash.png", left: centerOffset + spacing, top: 30, width: 15, height: 35, correct: false, feedbackAudio: "minority_cards_control_question_feedback_incorrect" }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'minority_cards_control_question',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'sun',
                    'correctChoiceRequired': true,
                    'feedbackAudio': true,
                    'nextButtonEnabled': false,
                    'maximumCorrectRequired': 1,
                    'nextButtonDelay': 'feedbackAudioEnd',
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'maximumAudioImageLoop': 1,
                    'mustPlayFeedback': true,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'highlights': [
                        {
                            'range': [6, 8],
                            'imageId': 'sun',
                            'color': 'blue'
                        },
                        {
                            'range': [9, 11],
                            'imageId': 'dash',
                            'color': 'blue'
                        }
                    ]
                },

                'minority-intro-2': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'minority_surprising_2',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                
                'minority-select-1-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const lastFrameId = sequence[sequence.length - 1]; const lastFrame = expData[lastFrameId]; const clickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selectedImage = clickEvents[clickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; images.push({ id: String(i + 1), src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "threecards_picking_first", highlights: selectedImage ? [{ imageId: selectedImage, range: [0, 999], color: "blue" }] : [] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'feedbackAudio': true,
                    'waitForEndAudio': true,
                    'showReplayButton': false,
                    'showPreviousButton': false,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'nextButtonDelay': 0,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                
                'minority-select-2-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const clickEvents = expData[sequence[sequence.length - 1]]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const previousSelection = clickEvents[clickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === previousSelection; images.push({ id: cardNum, src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "cards_selection_picknext", nonChoiceOption: isSelected }); } return { images: images, audio: "cards_selection_picksecond", highlights: [] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'feedbackAudio': true,
                    'waitForEndAudio': true,
                    'showReplayButton': false,
                    'showPreviousButton': false,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'nextButtonDelay': 0,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                
                'minority-select-3-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const firstClickEvents = expData[sequence[sequence.length - 2]]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const secondClickEvents = expData[sequence[sequence.length - 1]]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const firstSelection = firstClickEvents[firstClickEvents.length - 1]?.imageId; const secondSelection = secondClickEvents[secondClickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === firstSelection || cardNum === secondSelection; images.push({ id: cardNum, src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "okay_alldone", nonChoiceOption: isSelected }); } return { images: images, audio: "cards_selection_picklast", highlights: [] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'feedbackAudio': true,
                    'showReplayButton': false,
                    'showPreviousButton': false,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'nextButtonDelay': 0,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                
                'minority-reveal-suns': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const frameIds = [sequence[sequence.length - 3], sequence[sequence.length - 2], sequence[sequence.length - 1]]; const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents[clickEvents.length - 1]?.imageId; }).filter(id => id !== undefined); let images = []; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; const cardNum = String(i + 1); const isSelected = selections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isSelected ? "card_sun.png" : "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selection_reveal',
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': false,
                    'showReplayButton': true,
                    'showPreviousButton': false,
                    'mustPlayCount': 0,
                    'durationSeconds': 10,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        },
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3'],
                    'autoProceed': false
                },
                
                'minority-surprise-rating-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = [{ id: "topImage", src: "selection_three_suns.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10; const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2; images.push({ id: "not_surprised", src: "surprise_scale_not_surprised.png", left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "not_surprised" }); images.push({ id: "a_little_surprised", src: "surprise_scale_a_little_surprised.png", left: startX + ratingWidth + spacing, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "a_little_surprised" }); images.push({ id: "very_surprised", src: "surprise_scale_very_surprised.png", left: startX + 2 * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "very_surprised" }); return { images: images, audio: "minority_cards_selection_allthreesuns_scale" }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': false,
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'durationSeconds': 10,
                    'feedbackAudio': true,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        },
                    'highlights': [
                        {
                            'range': [5, 7],
                            'imageId': 'not_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [7, 9],
                            'imageId': 'a_little_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [9, 11],
                            'imageId': 'very_surprised',
                            'color': 'yellow'
                        }
                    ]
                },
                                
                'minority-surprise-rating-why': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const previousFrameId = sequence[sequence.length - 1]; const clickEvents = expData[previousFrameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const previousSelection = clickEvents[clickEvents.length - 1]?.imageId; let audioToPlay = previousSelection === "not_surprised" ? "not_surprised_why" : previousSelection === "a_little_surprised" ? "little_surprised_why" : "very_surprised_why"; let imageToShow = previousSelection === "not_surprised" ? "surprise_scale_not_surprised.png" : previousSelection === "a_little_surprised" ? "surprise_scale_a_little_surprised.png" : "surprise_scale_very_surprised.png"; return { images: [{ id: "topImage", src: "selection_three_suns.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }, { id: "selected_rating", src: imageToShow, left: 40, top: 50, width: 20, height: 35, nonChoiceOption: true}], audio: audioToPlay }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': true,
                    'durationSeconds': 10,
                    'showPreviousButton': false,
                    'showReplayButton': false,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                
                'minority-surprise-how': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const lastFrameId = sequence[sequence.length - 2]; const lastFrame = expData[lastFrameId]; const clickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selectedImage = clickEvents[clickEvents.length - 1]?.imageId || "not_surprised"; let images = [{ id: "topImage", src: "selection_three_suns.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: "surprise_scale_" + selectedImage + ".png", left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: "majority_cards_how-2" }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'showPreviousButton': false,
                    'showReplayButton': false,
                    'durationSeconds': 10,
                    'autoProceed': false,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                
                'final-thank-you': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = [{ id: "thank_you", src: "thank_you.png", left: 0, top: 0, width: 100, height: 100, position: "fill", nonChoiceOption: true }]; return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_outro',
                    'audioTypes': ['mp3'],
                    'showPreviousButton': false,
                    'showReplayButton': false,
                    'waitForEndAudio': true,
                    'mustPlay': true
                }

            }, // end of frames for surprising condition
            sequence: [
                'welcome',
                'welcome-to-my-game',
                'majority-intro-1',
                'majority-test-win',
                'majority-intro-2',
                'majority-select-1-combined',
                'majority-select-2-combined',
                'majority-select-3-combined',
                'majority-reveal-stars',
                'majority-surprise-rating-combined',
                'majority-surprise-rating-why',
                'majority-surprise-how',
                'majority-transition',
                'minority-intro-0',
                'minority-intro-1',
                'minority-test-win',
                'minority-intro-2',
                'minority-select-1-combined',
                'minority-select-2-combined',
                'minority-select-3-combined',
                'minority-reveal-suns',
                'minority-surprise-rating-combined',
                'minority-surprise-rating-why',
                'minority-surprise-how',
                'final-thank-you',
                'video-config',
                'video-consent',
                'positioning',
                'start-recording',
                'stop-recording',
                'email-survey'
            ]
        };
    } else {
        return {
            frames: {
                // Start of unsurprising condition frames
                'welcome': {
                    'kind': 'exp-lookit-text',
                    'blocks': [
                        {
                            'title': 'Welcome!'
                        },
                        {
                            'text': 'Thank you for your interest in our study, \'It`s in the cards!\'.'
                        },
                        {
                            'text': 'Here\'s a quick summary of what\'s about to happen:'
                        },
                        {
                            'text': '1. Webcam Setup and Video Consent: First, we\'ll be checking that your webcam is working. Then you and your child will give your consent to participate in this research.'
                        },
                        {
                            'text': '2. Start the Study: When you click the \'Start the game!\' button, the study will begin! This study will take about 10 minutes in total.'
                        },
                        {
                            'text': 'Thank you so much for helping us with our science! We hope you and your child have fun!'
                        }
                    ],
                    'showPreviousButton': false
                },
                'video-config': {
                    'kind': 'exp-video-config',
                    'troubleshootingIntro': 'If you\'re having any trouble getting your webcam set up, please feel free to call the Social Learning Lab at (650) 498-7832 and we\'d be glad to help you out!'
                },
                'video-consent': {
                    'kind': 'exp-lookit-video-consent',
                    'template': 'consent_005',
                    'PIName': 'Hyowon Gweon',
                    'institution': 'Stanford University',
                    'PIContact': 'Hyowon Gweon at hyo@stanford.edu',
                    'purpose': 'Can children be surprised by what appear to be the outcomes of their own actions? This study will help us find out whether children can reason about themselves as causal agents in a way complex enough to include surprise.',
                    'procedures': 'Your child will be shown pictures of different kinds of cards and asked to select certain ones. We are interested in your child\'s reaction to the results of their selections. We will ask you (the parent) to let your child make their own decisions. We also ask that you refrain from influencing their response by expressing an emotional reaction of your own.',
                    'risk_statement': 'There are no expected risks if you participate in the study.',
                    'voluntary_participation': 'Participation in this study is entirely optional, and you are free to exit at any time.',
                    'payment': 'After you finish the study, we will email you a $5 ______ gift card within approximately three days. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child\'s data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.',
                    'datause': 'We are primarily interested in your child\'s emotional and verbal responses to the results of the card game. A research assistant will watch your video to assess the amount of surprise your child displays.',
                    'include_databrary': true,
                    'gdpr': false,
                    'research_rights_statement': 'You are not waiving any legal claims, rights or remedies because of your participation in this research study. If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the [IRB NAME], [INSTITUTION], [ADDRESS/CONTACT]'
                },

                'positioning': {
                    'kind': 'exp-video-config-quality',
                    'title': 'Positioning',
                    'introText': 'It\'s time to get your child & check yourself out!',
                    'showRecordMenu': false,
                    'requireTestVideo': false,
                    'completedItemText': 'Got it!',
                    'instructionBlocks': [
                        {
                            'text': 'You and your child can sit in any position.',
                            'title': 'Get comfortable'
                        },
                        {
                            'text': 'Go ahead and get settled and use the webcam preview to make sure your child\'s whole face and torso are in view.',
                            'title': 'Take a few moments'
                        },
                        {
                            'text': 'Press the \'Next\' button down below if you and your child are in position and ready to go.',
                            'title': 'When you\'re ready'
                        }
                    ],
                    'nextButtonText': 'My child and I are in position and ready to start!',
                    'showPreviousButton': true,
                    'requireItemConfirmation': true,
                    'recordingInstructionText': ''
                },
                'start-recording': {
                    'kind': 'exp-lookit-start-recording',
                    'imageAnimation': 'spin',
                    'displayFullscreen': true
                },
                'stop-recording': {
                    'kind': 'exp-lookit-stop-recording',
                    'imageAnimation': 'spin',
                    'displayFullscreen': true
                },
                'email-survey': {
                    'kind': 'exp-lookit-survey',
                    'formSchema': {
                        'schema': {
                            'type': 'object',
                            'title': 'Thank you for your participation! Please provide your email for study compensation, note your email will only be used for compensation and nothing else.',
                            'properties': {
                                'Email': {
                                    'type': 'string',
                                    'title': 'Email',
                                    'required': true
                                }
                            }
                        }
                    },
                    'nextButtonText': 'Finish Study'
                },

                'welcome-to-my-game': {
                    'kind': 'exp-lookit-images-audio',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main/',
                    'audio': 'majority_cards_intro',
                    'audioTypes': ['mp3'],
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'images': [
                        {
                            'id': 'welcome',
                            'src': 'background_welcome.png',
                            'position': 'fill'
                        }
                    ],
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'nextButtonText': 'Next',
                    'showPreviousButton': false,
                    'showReplayButton': true
                },
                
                
                'majority-intro-1': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'majority_dash_1',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'videoTypes': ['mp4']
                },
                
               'majority-test-win': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: "star", src: "card_star.png", left: centerOffset, top: 30, width: 15, height: 35, correct: true, feedbackAudio: "majority_cards_control_question_correct", clickable: true }); images.push({ id: "dash", src: "card_dash.png", left: centerOffset + spacing, top: 30, width: 15, height: 35, correct: false, feedbackAudio: "majority_cards_control_question_incorrect", clickable: false }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'majority_cards_control_question',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,        // This needs to be true for correctChoiceRequired to work
                    'correctChoice': 'star',          // The ID of the correct image
                    'correctChoiceRequired': true,
                    'feedbackAudio': true,
                    'nextButtonEnabled': false,
                    'maximumCorrectRequired': 1,
                    'nextButtonDelay': 'feedbackAudioEnd',
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'minDuration': 0,
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'maximumAudioImageLoop': 1,
                    'mustPlayFeedback': true,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'highlights': [
                        {
                            'range': [6, 8],
                            'imageId': 'star',
                            'color': 'blue'
                        },
                        {
                            'range': [9, 11],
                            'imageId': 'dash',
                            'color': 'blue'
                        }
                    ]
                },

    
            'majority-intro-2': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'majority_dash_2',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },

            'majority-select-1-combined': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const lastFrameId = sequence[sequence.length - 1]; const lastFrame = expData[lastFrameId]; const clickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selectedImage = clickEvents[clickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; images.push({ id: String(i + 1), src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "threecards_picking_first", highlights: selectedImage ? [{ imageId: selectedImage, range: [0, 999], color: "blue" }] : [] }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'showReplayButton': false,
                'showPreviousButton': false,
                'canMakeChoiceBeforeAudioFinished': false,
                'nextButtonDelay': 0,
                'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    }
            },

            'majority-select-2-combined': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const firstFrameId = sequence[sequence.length - 1]; const firstFrame = expData[firstFrameId]; console.log("First frame ID:", firstFrameId); console.log("First frame data:", firstFrame); console.log("Event timings:", firstFrame?.eventTimings); const clickEvents = firstFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const lastClickEvent = clickEvents[clickEvents.length - 1]; console.log("Last click event:", lastClickEvent); const lastSelection = lastClickEvent?.imageId; console.log("Last selection:", lastSelection); let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === lastSelection; images.push({ id: cardNum, src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "cards_selection_picksecond", highlights: [] }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'showReplayButton': false,
                'showPreviousButton': false,
                'canMakeChoiceBeforeAudioFinished': false,
                'nextButtonDelay': 0,
                'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    }
            },

            'majority-select-3-combined': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const secondLastFrameId = sequence[sequence.length - 2]; const lastFrameId = sequence[sequence.length - 1]; const secondLastFrame = expData[secondLastFrameId]; const lastFrame = expData[lastFrameId]; const secondLastClickEvents = secondLastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const lastClickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const secondLastSelection = secondLastClickEvents[secondLastClickEvents.length - 1]?.imageId; const lastSelection = lastClickEvents[lastClickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isPreviouslySelected = cardNum === secondLastSelection || cardNum === lastSelection; images.push({ id: cardNum, src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isPreviouslySelected, feedbackAudio: "okay_alldone" }); } return { images: images, audio: "cards_selection_picklast", highlights: [] }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'showReplayButton': false,
                'showPreviousButton': false,
                'waitForEndAudio': true,
                'canMakeChoiceBeforeAudioFinished': false,
                'nextButtonDelay': 0,
                'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    }
            },

 
               'majority-reveal-stars': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const frameIds = [sequence[sequence.length - 3], sequence[sequence.length - 2], sequence[sequence.length - 1]]; const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents[clickEvents.length - 1]?.imageId; }).filter(id => id !== undefined); let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = selections.includes(cardNum); images.push({ id: cardNum, src: isSelected ? "card_star.png" : "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selection_reveal',
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': true,
                    'showReplayButton': true,
                    'showPreviousButton': false,
                    'mustPlayCount': 1,
                    'audioTypes': ['mp3'],
                    'durationSeconds': 10,
                    'autoProceed': false,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },

                'majority-surprise-rating-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = [{ id: "topImage", src: "selection_three_stars.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10; const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2; images.push({ id: "not_surprised", src: "surprise_scale_not_surprised.png", left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "not_surprised" }); images.push({ id: "a_little_surprised", src: "surprise_scale_a_little_surprised.png", left: startX + ratingWidth + spacing, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "little_surprised" }); images.push({ id: "very_surprised", src: "surprise_scale_very_surprised.png", left: startX + 2 * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "very_surprised" }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'allthreestars_surprise_scale',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': false,
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'durationSeconds': 10,
                    'feedbackAudio': true,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'highlights': [
                        {
                            'range': [6, 7.5],
                            'imageId': 'not_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [8, 9.5],
                            'imageId': 'a_little_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [9.5, 11],
                            'imageId': 'very_surprised',
                            'color': 'yellow'
                        }
                    ]
                },
                

               'majority-surprise-rating-why': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const previousFrameId = sequence[sequence.length - 1]; console.log("Previous frame ID:", previousFrameId); const previousFrame = expData[previousFrameId]; console.log("Previous frame data:", previousFrame); const clickEvents = previousFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; console.log("Click events:", clickEvents); const previousSelection = clickEvents[clickEvents.length - 1]?.imageId; console.log("Previous selection:", previousSelection); let audioToPlay = previousSelection === "not_surprised" ? "not_surprised_why" : previousSelection === "a_little_surprised" ? "little_surprised_why" : "very_surprised_why"; let imageToShow = previousSelection === "not_surprised" ? "surprise_scale_not_surprised.png" : previousSelection === "a_little_surprised" ? "surprise_scale_a_little_surprised.png" : "surprise_scale_very_surprised.png"; console.log("Selected image to show:", imageToShow); let images = [{ id: "topImage", src: "selection_three_stars.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }, { id: "selected_rating", src: imageToShow, left: 40, top: 50, width: 20, height: 35, nonChoiceOption: true }]; console.log("Generated images:", images); return { images: images, audio: audioToPlay }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': true,
                    'durationSeconds': 10,
                    'showPreviousButton': false,
                    'showReplayButton': false,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                
                
                'majority-surprise-how': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const lastFrameId = sequence[sequence.length - 2]; const lastFrame = expData[lastFrameId]; const clickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selectedImage = clickEvents[clickEvents.length - 1]?.imageId || "not_surprised"; let images = [{ id: "topImage", src: "selection_three_stars.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: "surprise_scale_" + selectedImage + ".png", left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: "majority_cards_selection_how" }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'autoProceed': false,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': false,
                    'durationSeconds': 10,
                    'showPreviousButton': false,
                    'showReplayButton': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                
                'majority-transition': {
                        'kind': 'exp-lookit-video',
                        'video': {
                            'top': 0,
                            'left': 0,
                            'width': 100,
                            'source': '3_stars_majority_transition',
                            'loop': false
                        },
                        'backgroundColor': 'black',
                        'autoProceed': false,
                        'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        },
                        'showPreviousButton': false,
                        'showReplayButton': false,
                        'doRecording': false,
                        'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                        'videoTypes': ['mp4']
                    },

                'minority-intro-0': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'minority_transition_video',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },

                'minority-intro-1': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'minority_unsurprising_1',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                
                'minority-test-win': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: "sun", src: "card_sun.png", left: centerOffset, top: 30, width: 15, height: 35, correct: true, feedbackAudio: "minority_cards_control_question_feedback_correct" }); images.push({ id: "dash", src: "card_dash.png", left: centerOffset + spacing, top: 30, width: 15, height: 35, correct: false, feedbackAudio: "minority_cards_control_question_feedback_incorrect" }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'minority_cards_control_question',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'sun',
                    'correctChoiceRequired': true,
                    'feedbackAudio': true,
                    'nextButtonEnabled': false,
                    'maximumCorrectRequired': 1,
                    'nextButtonDelay': 'feedbackAudioEnd',
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'maximumAudioImageLoop': 1,
                    'mustPlayFeedback': true,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'highlights': [
                        {
                            'range': [6, 8],
                            'imageId': 'sun',
                            'color': 'blue'
                        },
                        {
                            'range': [9, 11],
                            'imageId': 'dash',
                            'color': 'blue'
                        }
                    ]
                },

                    'minority-intro-2': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'minority_unsurprising_2',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'fontSize': 'x-large',
                        'css': {
                            'background-color': '#f8f3bf',
                            'width': '50vw',
                            'height': '16vh',
                            'margin': 'auto',
                            'bottom': '2vh',
                            'right': '0',
                            'left': '0',
                            'position': 'fixed',
                            'padding': '10px 25px',
                            'text-align': 'center',
                            'display': 'table-cell',
                            'vertical-align': 'middle',
                            'border-radius': '15px'
                        }
                    },
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                
                'minority-select-1-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const lastFrameId = sequence[sequence.length - 1]; const lastFrame = expData[lastFrameId]; const clickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selectedImage = clickEvents[clickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; const cardNum = String(i + 1); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isMarked ? "card_back_with_marker.png" : "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "threecards_picking_first", highlights: selectedImage ? [{ imageId: selectedImage, range: [0, 999], color: "blue" }] : [] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'feedbackAudio': true,
                    'waitForEndAudio': true,
                    'showReplayButton': false,
                    'showPreviousButton': false,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'nextButtonDelay': 0,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
            
                'minority-select-2-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const clickEvents = expData[sequence[sequence.length - 1]]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const previousSelection = clickEvents[clickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === previousSelection; const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isMarked ? "card_back_with_marker.png" : "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "cards_selection_picknext", nonChoiceOption: isSelected }); } return { images: images, audio: "cards_selection_picksecond", highlights: [] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'feedbackAudio': true,
                    'waitForEndAudio': true,
                    'showReplayButton': false,
                    'showPreviousButton': false,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'nextButtonDelay': 0,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
            
                'minority-select-3-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const firstClickEvents = expData[sequence[sequence.length - 2]]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const secondClickEvents = expData[sequence[sequence.length - 1]]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const firstSelection = firstClickEvents[firstClickEvents.length - 1]?.imageId; const secondSelection = secondClickEvents[secondClickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === firstSelection || cardNum === secondSelection; const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isMarked ? "card_back_with_marker.png" : "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "okay_alldone", nonChoiceOption: isSelected }); } return { images: images, audio: "cards_selection_picklast", highlights: [] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'feedbackAudio': true,
                    'showReplayButton': false,
                    'showPreviousButton': false,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'nextButtonDelay': 0,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
            
                'minority-reveal-suns': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const frameIds = [sequence[sequence.length - 3], sequence[sequence.length - 2], sequence[sequence.length - 1]]; const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents[clickEvents.length - 1]?.imageId; }).filter(id => id !== undefined); const correctSelections = selections.filter(selection => { const pos = parseInt(selection) - 1; const row = Math.floor(pos / 6); const col = pos % 6; return markedPositions.some(markedPos => markedPos[0] === row && markedPos[1] === col); }).length; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; let images = []; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; const cardNum = String(i + 1); const isSelected = selections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isSelected ? (isMarked ? "card_sun.png" : "card_dash.png") : "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selection_reveal',
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': true,
                    'showReplayButton': true,
                    'showPreviousButton': false,
                    'mustPlayCount': 0,
                    
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3'],
                    'durationSeconds': 10,
                    'autoProceed': false,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                                
                'minority-surprise-rating-combined': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const frameIds = [sequence[sequence.length - 4], sequence[sequence.length - 3], sequence[sequence.length - 2]]; const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents[clickEvents.length - 1]?.imageId; }).filter(id => id !== undefined); const correctSelections = selections.filter(selection => { const pos = parseInt(selection) - 1; const row = Math.floor(pos / 6); const col = pos % 6; return markedPositions.some(markedPos => markedPos[0] === row && markedPos[1] === col); }).length; const backgroundImage = correctSelections === 0 ? "selection_no_sun.png" : correctSelections === 1 ? "selection_one_sun.png" : correctSelections === 2 ? "selection_two_suns.png" : "selection_three_suns.png"; const audioFile = correctSelections === 0 ? "majority_cards_selection_nosuns_scale" : correctSelections === 1 ? "majority_cards_selection_onesun_scale" : correctSelections === 2 ? "majority_cards_selection_twosuns_scale" : "minority_cards_selection_allthreesuns_scale"; let images = [{ id: "topImage", src: backgroundImage, left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10; const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2; images.push({ id: "not_surprised", src: "surprise_scale_not_surprised.png", left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "not_surprised" }); images.push({ id: "a_little_surprised", src: "surprise_scale_a_little_surprised.png", left: startX + ratingWidth + spacing, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "a_little_surprised" }); images.push({ id: "very_surprised", src: "surprise_scale_very_surprised.png", left: startX + 2 * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight, correct: true, feedbackAudio: "very_surprised" }); return { images: images, audio: audioFile }; }',
                        'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                        'audioTypes': ['mp3'],
                        'choiceRequired': true,
                        'waitForEndAudio': true,
                        'canMakeChoiceBeforeAudioFinished': false,
                        'mustPlay': false,
                        'showPreviousButton': false,
                        'showReplayButton': true,
                        'mustPlayCount': 0,
                        'minDurationToAudioEnd': 0,
                        'durationSeconds': 10,
                        'feedbackAudio': true,
                        'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        },
                        'highlights': [
                            {
                                'range': [4.75, 5.75],
                                'imageId': 'not_surprised',
                                'color': 'yellow'
                            },
                            {
                                'range': [6.75, 7.75],
                                'imageId': 'a_little_surprised',
                                'color': 'yellow'
                            },
                            {
                                'range': [8.75, 9.75],
                                'imageId': 'very_surprised',
                                'color': 'yellow'
                            }
                        ]
                    },
                
                'minority-surprise-rating-why': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const previousFrameId = sequence[sequence.length - 1]; const clickEvents = expData[previousFrameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const previousSelection = clickEvents[clickEvents.length - 1]?.imageId; let audioToPlay = previousSelection === "not_surprised" ? "not_surprised_why" : previousSelection === "a_little_surprised" ? "little_surprised_why" : "very_surprised_why"; const frameIds = [sequence[sequence.length - 5], sequence[sequence.length - 4], sequence[sequence.length - 3]]; const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents[clickEvents.length - 1]?.imageId; }).filter(id => id !== undefined); const correctSelections = selections.filter(selection => { const pos = parseInt(selection) - 1; const row = Math.floor(pos / 6); const col = pos % 6; return markedPositions.some(markedPos => markedPos[0] === row && markedPos[1] === col); }).length; const backgroundImage = correctSelections === 0 ? "selection_no_sun.png" : correctSelections === 1 ? "selection_one_sun.png" : correctSelections === 2 ? "selection_two_suns.png" : "selection_three_suns.png"; let imageToShow = previousSelection === "not_surprised" ? "surprise_scale_not_surprised.png" : previousSelection === "a_little_surprised" ? "surprise_scale_a_little_surprised.png" : "surprise_scale_very_surprised.png"; return { images: [{ id: "topImage", src: backgroundImage, left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }, { id: "selected_rating", src: imageToShow, left: 40, top: 50, width: 20, height: 35, nonChoiceOption: true}], audio: audioToPlay }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'waitForEndAudio': true,
                    'canMakeChoiceBeforeAudioFinished': false,
                    'mustPlay': true,
                    'durationSeconds': 10,
                    'showPreviousButton': false,
                    'showReplayButton': false,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                
                'minority-surprise-how': {
                    'kind': 'exp-lookit-images-audio',
                     'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const lastFrameId = sequence[sequence.length - 2]; const lastFrame = expData[lastFrameId]; const clickEvents = lastFrame?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selectedImage = clickEvents[clickEvents.length - 1]?.imageId || "not_surprised"; const frameIds = [sequence[sequence.length - 7], sequence[sequence.length - 6], sequence[sequence.length - 5]]; const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents[clickEvents.length - 1]?.imageId; }).filter(id => id !== undefined); const correctSelections = selections.filter(selection => { const pos = parseInt(selection) - 1; const row = Math.floor(pos / 6); const col = pos % 6; return markedPositions.some(markedPos => markedPos[0] === row && markedPos[1] === col); }).length; const backgroundImage = correctSelections === 0 ? "selection_no_sun.png" : correctSelections === 1 ? "selection_one_sun.png" : correctSelections === 2 ? "selection_two_suns.png" : "selection_three_suns.png"; let images = [{ id: "topImage", src: backgroundImage, left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: "surprise_scale_" + selectedImage + ".png", left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: "majority_cards_how-2" }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'durationSeconds': 10,
                    'autoProceed': false,
                    'parentTextBlock': {
                            'text': '<h3 style="margin-top: 0; margin-bottom: 10px">For Parents</h3><p style="margin-top: 5px; line-height: 1.4">Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                            'fontSize': 'x-large',
                            'css': {
                                'background-color': '#f8f3bf',
                                'width': '50vw',
                                'height': '16vh',
                                'margin': 'auto',
                                'bottom': '2vh',
                                'right': '0',
                                'left': '0',
                                'position': 'fixed',
                                'padding': '10px 25px',
                                'text-align': 'center',
                                'display': 'table-cell',
                                'vertical-align': 'middle',
                                'border-radius': '15px'
                            }
                        }
                },
                
                'final-thank-you': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = [{ id: "thank_you", src: "thank_you.png", left: 0, top: 0, width: 100, height: 100, position: "fill", nonChoiceOption: true }]; return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_outro',
                    'audioTypes': ['mp3'],
                    'showPreviousButton': false,
                    'showReplayButton': false,
                    'waitForEndAudio': true,
                    'mustPlay': true
                }

                // Using same sequence as surprising condition
            },
            sequence: [
                'welcome',
                'welcome-to-my-game',
                'majority-intro-1',
                'majority-test-win',
                'majority-intro-2',
                'majority-select-1-combined',
                'majority-select-2-combined',
                'majority-select-3-combined',
                'majority-reveal-stars',
                'majority-surprise-rating-combined',
                'majority-surprise-rating-why',
                'majority-surprise-how',
                'majority-transition',
                'minority-intro-0',
                'minority-intro-1',
                'minority-test-win',
                'minority-intro-2',
                'minority-select-1-combined',
                'minority-select-2-combined',
                'minority-select-3-combined',
                'minority-reveal-suns',
                'minority-surprise-rating-combined',
                'minority-surprise-rating-why',
                'minority-surprise-how',
                'final-thank-you',
                'video-consent',
                'positioning',
                'start-recording',
                'stop-recording',
                'email-survey'
            ]
        };
    }
}