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
                'study-intro': {
                    'blocks': [
                        {
                            'emph': true,
                            'text': 'Your child does not need to be with you until the videos begin. First, let\'s go over what will happen!',
                            'title': 'Overview of the \'Imagine That!\' study'
                        },
                        {
                            'text': 'During this study, your child will play a card game while we record where he or she chooses to look, as well as verbal responses to questions after the game is complete.'
                        },
                        {
                            'text': 'You\'ll have a chance to preview the game ahead of time. After reading the instructions you\'ll start the experiment when you and your child are ready.'
                        },
                        {
                            'text': 'The card game section will take about 2 minutes.'
                        },
                        {
                            'text': 'After the game, you will answer a few final questions. Then you\'re all done!'
                        }
                    ],
                    'showPreviousButton': false,
                    'kind': 'exp-lookit-text'
                },

                'welcome-to-my-game': {
                    'kind': 'exp-lookit-images-audio',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main/',
                    'audio': 'majority_cards_intro',
                    'audioTypes': ['mp3'],
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'images': [
                        {
                            'id': 'welcome',
                            'src': 'welcome_to_my_game.png',
                            'position': 'fill'
                        }
                    ],
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Click next when you\'re ready to continue!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'nextButtonText': 'Next',
                    'nextButtonDelay': 0,
                    'showPreviousButton': false
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
                        'text': '<h3>For Parents</h3><p><h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p></p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                
                'majority-test-win': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: \'star\', src: \'star_hd.png\', left: centerOffset, top: 30, width: 15, height: 35, feedbackAudio: \'majority_control_question_winners_correct\' }); images.push({ id: \'dash\', src: \'dash_card.png\', left: centerOffset + spacing, top: 30, width: 15, height: 35, feedbackAudio: \'majority_control_question_incorrect\' }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'control_question_winners',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'star',
                    'feedbackAudio': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'maximumAudioImageLoop': 1,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [
                        {
                            'range': [5, 6],
                            'imageId': 'star',
                            'color': 'blue'
                        },
                        {
                            'range': [7, 8],
                            'imageId': 'dash',
                            'color': 'blue'
                        }
                    ]
                },

                'majority-test-lose': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: \'star\', src: \'star_hd.png\', left: centerOffset, top: 30, width: 15, height: 35, feedbackAudio: \'control_question_losers_incorrect\' }); images.push({ id: \'dash\', src: \'dash_card.png\', left: centerOffset + spacing, top: 30, width: 15, height: 35, feedbackAudio: \'control_question_losers_correct\' }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'control_question_losers',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'dash',
                    'feedbackAudio': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'maximumAudioImageLoop': 1,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [
                        {
                            'range': [5.5, 6.5],
                            'imageId': 'star',
                            'color': 'blue'
                        },
                        {
                            'range': [7, 8],
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
                        'text': 'Click Next when you\'re ready to continue',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },

                'majority-your-turn': {
                    'kind': 'exp-lookit-images-audio',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main/',
                    'audio': 'cards_setof12_shuffle_reminder',
                    'audioTypes': ['mp3'],
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; images.push({ id: String(i + 1), src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'nextButtonText': 'Next',
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'showPreviousButton': false
                },

                'majority-your-turn-instructions': {
                    'kind': 'exp-lookit-images-audio',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main/',
                    'audio': 'cards_setof12_picking_instructions',
                    'audioTypes': ['mp3'],
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; images.push({ id: String(i + 1), src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'nextButtonText': 'Next',
                    'showPreviousButton': false,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },
                'majority-select-1': {
                    'kind': 'exp-lookit-images-audio',
                    'audio': 'cards_selected_feedback',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; images.push({ id: String(i + 1), src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: false, correct: true }); } return { images: images, selectedCards: [] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'canMakeChoiceBeforeAudioFinished': true,
                    'waitForEndAudio': false
                },
                'majority-select-1-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const firstSelection = expData[sequence[sequence.length - 1]].selectedImage; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, highlights: [{ imageId: firstSelection, range: [0, 999], color: \'grey\' }] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback_first',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'canMakeChoiceBeforeAudioFinished': true,
                    'waitForEndAudio': false,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },

                'majority-select-2': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelection = expData[sequence[sequence.length - 2]].selectedImage; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === previousSelection; images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected }); } return { images: images, selectedCards: [previousSelection], highlights: [{ imageId: previousSelection, range: [0, 999], color: \'grey\' }] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_next',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'canMakeChoiceBeforeAudioFinished': true,
                    'waitForEndAudio': false
                },
                'majority-select-2-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelections = [expData[sequence[sequence.length - 3]].selectedImage, expData[sequence[sequence.length - 1]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, highlights: previousSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback_first',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },
                'majority-select-3': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelections = [expData[sequence[sequence.length - 4]].selectedImage, expData[sequence[sequence.length - 2]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = previousSelections.includes(cardNum); images.push({ id: cardNum, src: \'card_back_hd.png\', left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected }); } return { images: images, selectedCards: previousSelections, highlights: previousSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_last',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'canMakeChoiceBeforeAudioFinished': true,
                    'waitForEndAudio': false
                },

                'majority-reveal-cardbacks': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 5]].selectedImage, expData[sequence[sequence.length - 3]].selectedImage, expData[sequence[sequence.length - 1]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); images.push({ id: String(i + 1), src: \'card_back_hd.png\', left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, highlights: allSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_reveal_transition',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },
                'majority-reveal-stars': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 6]].selectedImage, expData[sequence[sequence.length - 4]].selectedImage, expData[sequence[sequence.length - 2]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); images.push({ id: cardNum, src: isSelected ? \'star_hd_selected.png\' : \'card_back_hd.png\', left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_reveal',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },
                'majority-reveal-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 7]].selectedImage, expData[sequence[sequence.length - 5]].selectedImage, expData[sequence[sequence.length - 3]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); images.push({ id: cardNum, src: isSelected ? \'star_hd_selected.png\' : \'card_back_hd.png\', left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'majority_cards_selected_feedback',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },

                'majority-surprise-rating': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = [{id: \'background\', src: \'3_stars.png\', left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: \'fill\'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10; const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2; images.push({ id: \'not_surprised\', src: \'not_surprised.png\', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); images.push({ id: \'a_little_surprised\', src: \'a_little_surprised.png\', left: startX + ratingWidth + spacing, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); images.push({ id: \'very_surprised\', src: \'very_surprised.png\', left: startX + 2 * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'surprise_scale',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [
                        {
                            'range': [1.75, 2.75],
                            'imageId': 'not_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [3.75, 4.75],
                            'imageId': 'a_little_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [5.75, 6.75],
                            'imageId': 'very_surprised',
                            'color': 'yellow'
                        }
                    ]
                },
                'majority-surprise-why': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let theaudio = \'surprise_scale_not_why\'; let selectedImage = expData[sequence[sequence.length - 1]][\'selectedImage\']; if (selectedImage === \'a_little_surprised\') { theaudio = \'surprise_scale_little_why\'; } else if (selectedImage === \'very_surprised\') { theaudio = \'surprise_scale_very_why\'; } let images = [{id: \'background\', src: \'3_stars.png\', left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: \'fill\'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + \'.png\', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: theaudio }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf'
                    }
                },
                'majority-surprise-how': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let selectedImage = expData[sequence[sequence.length - 2]][\'selectedImage\']; let images = [{id: \'background\', src: \'3_stars.png\', left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: \'fill\'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + \'.png\', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: \'majority_cards_how\' }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'autoProceed': false,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': 'yellow'
                    }
                },
                'majority-transition': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let selectedImage = expData[sequence[sequence.length - 3]][\'selectedImage\']; let images = [{id: \'background\', src: \'3_stars.png\', left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: \'fill\'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + \'.png\', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: \'majority_transition\' }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'autoProceed': false,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf'
                    }
                },

                // Beginning of condition-specific minority frames
                'minority-intro-1': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'minority_surprising_dash_1',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                
                'minority-test-win': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: \'sun\', src: \'sun_hd.png\', left: centerOffset, top: 30, width: 15, height: 35, feedbackAudio: \'minority_control_question_winners_correct\' }); images.push({ id: \'dash\', src: \'dash_card.png\', left: centerOffset + spacing, top: 30, width: 15, height: 35, feedbackAudio: \'minority_control_question_winners_incorrect\' }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'control_question_winners',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'sun',
                    'feedbackAudio': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'maximumAudioImageLoop': 1,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [
                        {
                            'range': [5.5, 6.5],
                            'imageId': 'sun',
                            'color': 'blue'
                        },
                        {
                            'range': [7, 8],
                            'imageId': 'dash',
                            'color': 'blue'
                        }
                    ]
                    },

                'minority-test-lose': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: \'sun\', src: \'sun_hd.png\', left: centerOffset, top: 30, width: 15, height: 35, feedbackAudio: \'control_question_losers_incorrect\' }); images.push({ id: \'dash\', src: \'dash_card.png\', left: centerOffset + spacing, top: 30, width: 15, height: 35, feedbackAudio: \'control_question_losers_correct\' }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'control_question_losers',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'dash',
                    'feedbackAudio': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'maximumAudioImageLoop': 1,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [
                        {
                            'range': [5.5, 6.5],
                            'imageId': 'sun',
                            'color': 'blue'
                        },
                        {
                            'range': [7, 8],
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
                        'source': 'minority_surprising_dash_2',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                'minority-select-1': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: String(i + 1), src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: false, correct: true }); } return { images: images, markedPositions: markedPositions }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },
                'minority-select-1-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const firstSelection = expData[sequence[sequence.length - 1]].selectedImage; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, markedPositions: markedPositions, highlights: [{ imageId: firstSelection, range: [0, 999], color: \'grey\' }] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback_first',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': 'yellow'
                    },
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },
                'minority-select-2': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelection = expData[sequence[sequence.length - 2]].selectedImage; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === previousSelection; const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected }); } return { images: images, markedPositions: markedPositions, selectedCards: [previousSelection], highlights: [{ imageId: previousSelection, range: [0, 999], color: \'grey\' }] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_next',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },

                'minority-select-2-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelections = [expData[sequence[sequence.length - 3]].selectedImage, expData[sequence[sequence.length - 1]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, markedPositions: markedPositions, highlights: previousSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback_first',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3'],
                    'choiceRequired': false
                },
                'minority-select-3': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelections = [expData[sequence[sequence.length - 4]].selectedImage, expData[sequence[sequence.length - 2]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = previousSelections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected }); } return { images: images, markedPositions: markedPositions, selectedCards: previousSelections, highlights: previousSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_last',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true
                },
                'minority-reveal-cardbacks': {
                    'kind': 'exp-lookit-images-audio',
                     "generateProperties": "function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 6]].selectedImage, expData[sequence[sequence.length - 4]].selectedImage, expData[sequence[sequence.length - 2]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); let cardSrc; if (isSelected) { if (isMarked) { cardSrc = 'sun_hd_selected.png'; } else { cardSrc = 'dash_card.png'; } } else if (isMarked) { cardSrc = 'card_back_marker_hd.png'; } else { cardSrc = 'card_back_hd.png'; } images.push({ id: cardNum, src: cardSrc, left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }",
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_reveal_transition',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },
                'minority-reveal-suns': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 6]].selectedImage, expData[sequence[sequence.length - 4]].selectedImage, expData[sequence[sequence.length - 2]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); let cardSrc; if (isSelected) { if (isMarked) { cardSrc = \'sun_hd_selected.png\'; } else { cardSrc = \'dash_card.png\'; } } else if (isMarked) { cardSrc = \'card_back_hd.png\'; } else { cardSrc = \'card_back_hd.png\'; } images.push({ id: cardNum, src: cardSrc, left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_reveal',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },

                'minority-reveal-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 7]].selectedImage, expData[sequence[sequence.length - 5]].selectedImage, expData[sequence[sequence.length - 3]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); let cardSrc; if (isSelected) { if (isMarked) { cardSrc = \'sun_hd_selected.png\'; } else { cardSrc = \'dash_card.png\'; } } else if (isMarked) { cardSrc = \'card_back_hd.png\'; } else { cardSrc = \'card_back_hd.png\'; } images.push({ id: cardNum, src: cardSrc, left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'minority_cards_selected_feedback',
                    'waitForEndAudio': false,
                    'audioTypes': ['mp3']
                },
                
                "minority-surprise-rating": {
    "kind": "exp-lookit-images-audio",
    "generateProperties": "function(expData, sequence, child, pastSessions) { const allSelections = [expData[sequence[sequence.length - 8]].selectedImage, expData[sequence[sequence.length - 6]].selectedImage, expData[sequence[sequence.length - 4]].selectedImage]; const markedPositions = [[0,1], [0,4], [1,1]]; const correctSuns = allSelections.filter(selection => markedPositions.some(pos => pos[0] === Math.floor((parseInt(selection) - 1) / 6) && pos[1] === (parseInt(selection) - 1) % 6)).length; const backgroundImage = correctSuns === 1 ? 'one_sun.png' : (correctSuns === 2 ? 'two_suns.png' : '3_suns.png'); let images = [{id: 'background', src: backgroundImage, left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: 'fill'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10; const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2; images.push({ id: 'not_surprised', src: 'not_surprised.png', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); images.push({ id: 'a_little_surprised', src: 'a_little_surprised.png', left: startX + ratingWidth + spacing, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); images.push({ id: 'very_surprised', src: 'very_surprised.png', left: startX + 2 * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); return { images: images }; }",
    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main",
    "audio": "surprise_scale",
    "audioTypes": ["mp3"],
    "choiceRequired": true,
    "waitForEndAudio": false,
    "parentTextBlock": {
        "text": '<h3>For Parents</h3><p><h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p></p>',
        "backgroundColor": "#f8f3bf"
    },
    "highlights": [
        {
            "range": [1.75, 2.75],
            "imageId": "not_surprised",
            "color": "yellow"
        },
        {
            "range": [3.75, 4.75],
            "imageId": "a_little_surprised",
            "color": "yellow"
        },
        {
            "range": [5.75, 6.75],
            "imageId": "very_surprised",
            "color": "yellow"
        }
    ]
},

"minority-surprise-why": {
    "kind": "exp-lookit-images-audio",
    "generateProperties": "function(expData, sequence, child, pastSessions) { let theaudio = 'surprise_scale_not_why'; let selectedImage = expData[sequence[sequence.length - 1]]['selectedImage']; if (selectedImage === 'a_little_surprised') { theaudio = 'surprise_scale_little_why'; } else if (selectedImage === 'very_surprised') { theaudio = 'surprise_scale_very_why'; } const allSelections = [expData[sequence[sequence.length - 9]].selectedImage, expData[sequence[sequence.length - 7]].selectedImage, expData[sequence[sequence.length - 5]].selectedImage]; const markedPositions = [[0,1], [0,4], [1,1]]; const correctSuns = allSelections.filter(selection => markedPositions.some(pos => pos[0] === Math.floor((parseInt(selection) - 1) / 6) && pos[1] === (parseInt(selection) - 1) % 6)).length; const backgroundImage = correctSuns === 1 ? 'one_sun.png' : (correctSuns === 2 ? 'two_suns.png' : '3_suns.png'); let images = [{id: 'background', src: backgroundImage, left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: 'fill'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + '.png', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: theaudio }; }",
    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main",
    "audioTypes": ["mp3"],
    "choiceRequired": false,
    "autoProceed": false,
    "parentTextBlock": {
        "text": '<h3>For Parents</h3><p><h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p></p>',
        "backgroundColor": "#f8f3bf"
    }
},

"minority-surprise-how": {
    "kind": "exp-lookit-images-audio",
    "generateProperties": "function(expData, sequence, child, pastSessions) { let selectedImage = expData[sequence[sequence.length - 2]]['selectedImage']; const allSelections = [expData[sequence[sequence.length - 10]].selectedImage, expData[sequence[sequence.length - 8]].selectedImage, expData[sequence[sequence.length - 6]].selectedImage]; const markedPositions = [[0,1], [0,4], [1,1]]; const correctSuns = allSelections.filter(selection => markedPositions.some(pos => pos[0] === Math.floor((parseInt(selection) - 1) / 6) && pos[1] === (parseInt(selection) - 1) % 6)).length; const backgroundImage = correctSuns === 1 ? 'one_sun.png' : (correctSuns === 2 ? 'two_suns.png' : '3_suns.png'); let images = [{id: 'background', src: backgroundImage, left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: 'fill'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + '.png', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: 'majority_cards_how' }; }",
    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main",
    "audioTypes": ["mp3"],
    "choiceRequired": false,
    "autoProceed": false,
    "parentTextBlock": {
        "text": '<h3>For Parents</h3><p><h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p></p>',
        "backgroundColor": "#f8f3bf"
    }
},
        
        "explore-more-test": {
            "kind": "exp-lookit-images-audio",
            "generateProperties": "function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: 'same', src: 'sun_dash_cards.png', left: centerOffset, top: 30, width: 25, height: 45 }); images.push({ id: 'different', src: 'background_2.png', left: centerOffset + spacing, top: 30, width: 25, height: 45 }); return { images: images }; }",
            "baseDir": "https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main",
            "audio": "exploration_selection",
            "audioTypes": ["mp3"],
            "choiceRequired": true,
            "parentTextBlock": {
                "text": "Please don’t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say ‘Okay!’ when your child answers - don’t give any hints or say whether you agree!",
                "backgroundColor": "#f8f3bf"
            },
    "highlights": [
      {
        "range": [8, 10],
        "imageId": "same",
        "color": "yellow"
      },
      {
        "range": [11.5, 13.5],
        "imageId": "different",
        "color": "yellow"
      }
    ]
        }

            }, // end of frames for surprising condition
            sequence: [
                'welcome',
                'study-intro',
                'welcome-to-my-game',
                'majority-intro-1',
                'majority-test-win',
                'majority-test-win-feedback',
                'majority-test-lose',
                'majority-test-lose-feedback',
                'majority-intro-2',
                'majority-your-turn',
                'majority-your-turn-instructions',
                'majority-select-1',
                'majority-select-1-feedback',
                'majority-select-2',
                'majority-select-2-feedback',
                'majority-select-3',
                'majority-reveal-cardbacks',
                'majority-reveal-stars',
                'majority-reveal-feedback',
                'majority-surprise-rating',
                'majority-surprise-why',
                'majority-surprise-how',
                'majority-transition',
                'minority-intro-1',
                'minority-test-win',
                'minority-test-win-feedback',
                'minority-test-lose',
                'minority-test-lose-feedback',
                'minority-intro-2',
                'minority-select-1',
                'minority-select-1-feedback',
                'minority-select-2',
                'minority-select-2-feedback',
                'minority-select-3',
                'minority-reveal-cardbacks',
                'minority-reveal-suns',
                'minority-reveal-feedback',
                'minority-surprise-rating',
                'minority-surprise-why',
                'minority-surprise-how',
                'explore-more-test',
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
                'study-intro': {
                    'blocks': [
                        {
                            'emph': true,
                            'text': 'Your child does not need to be with you until the videos begin. First, let\'s go over what will happen!',
                            'title': 'Overview of the \'Imagine That!\' study'
                        },
                        {
                            'text': 'During this study, your child will play a card game while we record where he or she chooses to look, as well as verbal responses to questions after the game is complete.'
                        },
                        {
                            'text': 'You\'ll have a chance to preview the game ahead of time. After reading the instructions you\'ll start the experiment when you and your child are ready.'
                        },
                        {
                            'text': 'The card game section will take about 2 minutes.'
                        },
                        {
                            'text': 'After the game, you will answer a few final questions. Then you\'re all done!'
                        }
                    ],
                    'showPreviousButton': false,
                    'kind': 'exp-lookit-text'
                },

                'welcome-to-my-game': {
                    'kind': 'exp-lookit-images-audio',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main/',
                    'audio': 'majority_cards_intro',
                    'audioTypes': ['mp3'],
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'images': [
                        {
                            'id': 'welcome',
                            'src': 'welcome_to_my_game.png',
                            'position': 'fill'
                        }
                    ],
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'nextButtonText': 'Next',
                    'nextButtonDelay': 0,
                    'showPreviousButton': false
                },


                // All the same majority frames would be here, identical to surprising condition

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
                        'text': 'Click Next when you\'re ready to continue',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                
                'majority-test-win': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: \'star\', src: \'star_hd.png\', left: centerOffset, top: 30, width: 15, height: 35, feedbackAudio: \'majority_control_question_winners_correct\' }); images.push({ id: \'dash\', src: \'dash_card.png\', left: centerOffset + spacing, top: 30, width: 15, height: 35, feedbackAudio: \'majority_control_question_incorrect\' }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'control_question_winners',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'star',
                    'feedbackAudio': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'maximumAudioImageLoop': 1,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [
                        {
                            'range': [5, 6],
                            'imageId': 'star',
                            'color': 'blue'
                        },
                        {
                            'range': [7, 8],
                            'imageId': 'dash',
                            'color': 'blue'
                        }
                    ]
                },

                'majority-test-lose': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: \'star\', src: \'star_hd.png\', left: centerOffset, top: 30, width: 15, height: 35, feedbackAudio: \'control_question_losers_incorrect\' }); images.push({ id: \'dash\', src: \'dash_card.png\', left: centerOffset + spacing, top: 30, width: 15, height: 35, feedbackAudio: \'control_question_losers_correct\' }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'control_question_losers',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'dash',
                    'feedbackAudio': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'maximumAudioImageLoop': 1,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [
                        {
                            'range': [5.5, 6.5],
                            'imageId': 'star',
                            'color': 'blue'
                        },
                        {
                            'range': [7, 8],
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
                        'text': 'Click Next when you\'re ready to continue',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                'majority-your-turn': {
                    'kind': 'exp-lookit-images-audio',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main/',
                    'audio': 'cards_setof12_shuffle_reminder',
                    'audioTypes': ['mp3'],
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; images.push({ id: String(i + 1), src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'nextButtonText': 'Next',
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'showPreviousButton': false
                },

                'majority-your-turn-instructions': {
                    'kind': 'exp-lookit-images-audio',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main/',
                    'audio': 'cards_setof12_picking_instructions',
                    'audioTypes': ['mp3'],
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; images.push({ id: String(i + 1), src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'nextButtonText': 'Next',
                    'showPreviousButton': false,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },
                'majority-select-1': {
                    'kind': 'exp-lookit-images-audio',
                    'audio': 'cards_selected_feedback',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; for (let i = 0; i < 12; i++) { const row = Math.floor(i / 6); const col = i % 6; images.push({ id: String(i + 1), src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: false, correct: true }); } return { images: images, selectedCards: [] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'canMakeChoiceBeforeAudioFinished': true,
                    'waitForEndAudio': false
                },
                'majority-select-1-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const firstSelection = expData[sequence[sequence.length - 1]].selectedImage; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, highlights: [{ imageId: firstSelection, range: [0, 999], color: \'grey\' }] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback_first',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'canMakeChoiceBeforeAudioFinished': true,
                    'waitForEndAudio': false,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },

                'majority-select-2': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelection = expData[sequence[sequence.length - 2]].selectedImage; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === previousSelection; images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected }); } return { images: images, selectedCards: [previousSelection], highlights: [{ imageId: previousSelection, range: [0, 999], color: \'grey\' }] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_next',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'canMakeChoiceBeforeAudioFinished': true,
                    'waitForEndAudio': false
                },
                'majority-select-2-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelections = [expData[sequence[sequence.length - 3]].selectedImage, expData[sequence[sequence.length - 1]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); images.push({ id: cardNum, src: \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, highlights: previousSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback_first',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },
                'majority-select-3': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelections = [expData[sequence[sequence.length - 4]].selectedImage, expData[sequence[sequence.length - 2]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = previousSelections.includes(cardNum); images.push({ id: cardNum, src: \'card_back_hd.png\', left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected }); } return { images: images, selectedCards: previousSelections, highlights: previousSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_last',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'canMakeChoiceBeforeAudioFinished': true,
                    'waitForEndAudio': false
                },

                'majority-reveal-cardbacks': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 5]].selectedImage, expData[sequence[sequence.length - 3]].selectedImage, expData[sequence[sequence.length - 1]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); images.push({ id: String(i + 1), src: \'card_back_hd.png\', left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, highlights: allSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_reveal_transition',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },
                'majority-reveal-stars': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 6]].selectedImage, expData[sequence[sequence.length - 4]].selectedImage, expData[sequence[sequence.length - 2]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); images.push({ id: cardNum, src: isSelected ? \'star_hd_selected.png\' : \'card_back_hd.png\', left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_reveal',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },
                'majority-reveal-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 7]].selectedImage, expData[sequence[sequence.length - 5]].selectedImage, expData[sequence[sequence.length - 3]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); images.push({ id: cardNum, src: isSelected ? \'star_hd_selected.png\' : \'card_back_hd.png\', left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'majority_cards_selected_feedback',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },

                'majority-surprise-rating': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = [{id: \'background\', src: \'3_stars.png\', left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: \'fill\'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10; const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2; images.push({ id: \'not_surprised\', src: \'not_surprised.png\', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); images.push({ id: \'a_little_surprised\', src: \'a_little_surprised.png\', left: startX + ratingWidth + spacing, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); images.push({ id: \'very_surprised\', src: \'very_surprised.png\', left: startX + 2 * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'surprise_scale',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [ 'fontSize': '14px',
                        {
                            'range': [1.75, 2.75],
                            'imageId': 'not_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [3.75, 4.75],
                            'imageId': 'a_little_surprised',
                            'color': 'yellow'
                        },
                        {
                            'range': [5.75, 6.75],
                            'imageId': 'very_surprised',
                            'color': 'yellow'
                        }
                    ]
                },
                'majority-surprise-why': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let theaudio = \'surprise_scale_not_why\'; let selectedImage = expData[sequence[sequence.length - 1]][\'selectedImage\']; if (selectedImage === \'a_little_surprised\') { theaudio = \'surprise_scale_little_why\'; } else if (selectedImage === \'very_surprised\') { theaudio = \'surprise_scale_very_why\'; } let images = [{id: \'background\', src: \'3_stars.png\', left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: \'fill\'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + \'.png\', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: theaudio }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf'
                    }
                },
                'majority-surprise-how': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let selectedImage = expData[sequence[sequence.length - 2]][\'selectedImage\']; let images = [{id: \'background\', src: \'3_stars.png\', left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: \'fill\'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + \'.png\', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: \'majority_cards_how\' }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'autoProceed': false,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf'
                    }
                },
                'majority-transition': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let selectedImage = expData[sequence[sequence.length - 3]][\'selectedImage\']; let images = [{id: \'background\', src: \'3_stars.png\', left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: \'fill\'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + \'.png\', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: \'majority_transition\' }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'autoProceed': false,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf'
                    }
                },


                // Now showing the key differences for minority frames in unsurprising condition
                'minority-intro-1': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'minority_unsurprising_dash_1',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                
                'minority-test-win': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: \'sun\', src: \'sun_hd.png\', left: centerOffset, top: 30, width: 15, height: 35, feedbackAudio: \'minority_control_question_winners_correct\' }); images.push({ id: \'dash\', src: \'dash_card.png\', left: centerOffset + spacing, top: 30, width: 15, height: 35, feedbackAudio: \'minority_control_question_winners_incorrect\' }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'control_question_winners',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'sun',
                    'feedbackAudio': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'maximumAudioImageLoop': 1,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [
                        {
                            'range': [5.5, 6.5],
                            'imageId': 'sun',
                            'color': 'blue'
                        },
                        {
                            'range': [7, 8],
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
                        'source': 'minority_unsurprising_dash_2',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'requiredDuration': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'videoTypes': ['mp4']
                },
                
                'minority-test-lose': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: \'sun\', src: \'sun_hd.png\', left: centerOffset, top: 30, width: 15, height: 35, feedbackAudio: \'control_question_losers_incorrect\' }); images.push({ id: \'dash\', src: \'dash_card.png\', left: centerOffset + spacing, top: 30, width: 15, height: 35, feedbackAudio: \'control_question_losers_correct\' }); return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'control_question_losers',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'correctChoice': 'dash',
                    'feedbackAudio': true,
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'minDuration': 0,
                    'minDurationToAudioEnd': 0,
                    'maximumAudioImageLoop': 1,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'highlights': [
                        {
                            'range': [5.5, 6.5],
                            'imageId': 'sun',
                            'color': 'blue'
                        },
                        {
                            'range': [7, 8],
                            'imageId': 'dash',
                            'color': 'blue'
                        }
                    ]
                    },
                
                'minority-select-1': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: String(i + 1), src: isMarked ? \"card_back_marker_hd.png\" : \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: false, correct: true }); } return { images: images, markedPositions: markedPositions }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },
                'minority-select-1-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const firstSelection = expData[sequence[sequence.length - 1]].selectedImage; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isMarked ? \"card_back_marker_hd.png\" : \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, markedPositions: markedPositions, highlights: [{ imageId: firstSelection, range: [0, 999], color: \'grey\' }] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback_first',
                    'audioTypes': ['mp3'],
                    'choiceRequired': false,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },

                'minority-select-2': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelection = expData[sequence[sequence.length - 2]].selectedImage; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = cardNum === previousSelection; const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isMarked ? \"card_back_marker_hd.png\" : \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected }); } return { images: images, markedPositions: markedPositions, selectedCards: [previousSelection], highlights: [{ imageId: previousSelection, range: [0, 999], color: \'grey\' }] }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_next',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true,
                    'parentTextBlock': {
                        'text': '<h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p>',
                        'backgroundColor': '#f8f3bf',
                        'fontSize': '14px',
                    },
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0
                },
                'minority-select-2-feedback': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelections = [expData[sequence[sequence.length - 3]].selectedImage, expData[sequence[sequence.length - 1]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isMarked ? \"card_back_marker_hd.png\" : \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, markedPositions: markedPositions, highlights: previousSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_feedback_first',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3'],
                    'choiceRequired': false
                },
                'minority-select-3': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const previousSelections = [expData[sequence[sequence.length - 4]].selectedImage, expData[sequence[sequence.length - 2]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = previousSelections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isMarked ? \"card_back_marker_hd.png\" : \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, correct: !isSelected }); } return { images: images, markedPositions: markedPositions, selectedCards: previousSelections, highlights: previousSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_last',
                    'audioTypes': ['mp3'],
                    'choiceRequired': true
                },

                'minority-reveal-cardbacks': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 5]].selectedImage, expData[sequence[sequence.length - 3]].selectedImage, expData[sequence[sequence.length - 1]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: cardNum, src: isMarked ? \"card_back_marker_hd.png\" : \"card_back_hd.png\", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, highlights: allSelections.map(selection => ({ imageId: selection, range: [0, 999], color: \'grey\' })) }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_reveal_transition',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },
                'minority-reveal-suns': {
                    'kind': 'exp-lookit-images-audio',
                    'generateProperties': 'function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 6]].selectedImage, expData[sequence[sequence.length - 4]].selectedImage, expData[sequence[sequence.length - 2]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); let cardSrc; if (isSelected) { if (isMarked) { cardSrc = \'sun_hd_selected.png\'; } else { cardSrc = \'dash_card.png\'; } } else if (isMarked) { cardSrc = \'card_back_marker_hd.png\'; } else { cardSrc = \'card_back_hd.png\'; } images.push({ id: cardNum, src: cardSrc, left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main',
                    'audio': 'cards_selected_reveal',
                    'waitForEndAudio': false,
                    'canMakeChoiceBeforeAudioFinished': true,
                    'nextButtonDelay': 0,
                    'requireAudioCount': 0,
                    'requireVideoCount': 0,
                    'mustPlay': false,
                    'mustPlayCount': 0,
                    'minDurationToAudioEnd': 0,
                    'audioTypes': ['mp3']
                },

                    "minority-reveal-feedback": {
                    "kind": "exp-lookit-images-audio",
                    "generateProperties": "function(expData, sequence, child, pastSessions) { const markedPositions = [[0,1], [0,4], [1,1]]; const cardWidth = 15; const cardHeight = 35; const cardsPerRow = 6; const totalRows = 2; const horizontalSpacing = 16; const verticalSpacing = 40; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const totalHeight = (totalRows * cardHeight) + ((totalRows - 1) * (verticalSpacing - cardHeight)); const startLeft = (100 - totalWidth) / 2; const startTop = (100 - totalHeight) / 2; const allSelections = [expData[sequence[sequence.length - 7]].selectedImage, expData[sequence[sequence.length - 5]].selectedImage, expData[sequence[sequence.length - 3]].selectedImage]; let images = []; for (let i = 0; i < 12; i++) { const col = i % 6; const row = Math.floor(i / 6); const cardNum = String(i + 1); const isSelected = allSelections.includes(cardNum); const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); let cardSrc; if (isSelected) { if (isMarked) { cardSrc = 'sun_hd_selected.png'; } else { cardSrc = 'dash_card.png'; } } else if (isMarked) { cardSrc = 'card_back_marker_hd.png'; } else { cardSrc = 'card_back_hd.png'; } images.push({ id: cardNum, src: cardSrc, left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }",
                    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main",
                    "audio": "minority_cards_selected_feedback",
                    "waitForEndAudio": false,
                    "audioTypes": ["mp3"]
                },
                
                "minority-surprise-rating": {
                "kind": "exp-lookit-images-audio",
                "generateProperties": "function(expData, sequence, child, pastSessions) { const allSelections = [expData[sequence[sequence.length - 8]].selectedImage, expData[sequence[sequence.length - 6]].selectedImage, expData[sequence[sequence.length - 4]].selectedImage]; const markedPositions = [[0,1], [0,4], [1,1]]; const correctSuns = allSelections.filter(selection => markedPositions.some(pos => pos[0] === Math.floor((parseInt(selection) - 1) / 6) && pos[1] === (parseInt(selection) - 1) % 6)).length; const backgroundImage = correctSuns === 1 ? 'one_sun.png' : (correctSuns === 2 ? 'two_suns.png' : '3_suns.png'); let images = [{id: 'background', src: backgroundImage, left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: 'fill'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10; const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2; images.push({ id: 'not_surprised', src: 'not_surprised.png', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); images.push({ id: 'a_little_surprised', src: 'a_little_surprised.png', left: startX + ratingWidth + spacing, top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); images.push({ id: 'very_surprised', src: 'very_surprised.png', left: startX + 2 * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight, correct: true }); return { images: images }; }",
                "baseDir": "https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main",
                "audio": "surprise_scale",
                "audioTypes": ["mp3"],
                "choiceRequired": true,
                "waitForEndAudio": false,
                "parentTextBlock": {
                "text": '<h3>For Parents</h3><p><h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p></p>',
                "backgroundColor": "#f8f3bf"
                },
                    "highlights": [
                    {
                        "range": [1.75, 2.75],
                        "imageId": "not_surprised",
                        "color": "yellow"
                    },
                    {
                        "range": [3.75, 4.75],
                        "imageId": "a_little_surprised",
                        "color": "yellow"
                    },
                    {
                        "range": [5.75, 6.75],
                        "imageId": "very_surprised",
                        "color": "yellow"
                    }
                ]
            },

"minority-surprise-why": {
    "kind": "exp-lookit-images-audio",
    "generateProperties": "function(expData, sequence, child, pastSessions) { let theaudio = 'surprise_scale_not_why'; let selectedImage = expData[sequence[sequence.length - 1]]['selectedImage']; if (selectedImage === 'a_little_surprised') { theaudio = 'surprise_scale_little_why'; } else if (selectedImage === 'very_surprised') { theaudio = 'surprise_scale_very_why'; } const allSelections = [expData[sequence[sequence.length - 9]].selectedImage, expData[sequence[sequence.length - 7]].selectedImage, expData[sequence[sequence.length - 5]].selectedImage]; const markedPositions = [[0,1], [0,4], [1,1]]; const correctSuns = allSelections.filter(selection => markedPositions.some(pos => pos[0] === Math.floor((parseInt(selection) - 1) / 6) && pos[1] === (parseInt(selection) - 1) % 6)).length; const backgroundImage = correctSuns === 1 ? 'one_sun.png' : (correctSuns === 2 ? 'two_suns.png' : '3_suns.png'); let images = [{id: 'background', src: backgroundImage, left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: 'fill'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + '.png', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: theaudio }; }",
    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main",
    "audioTypes": ["mp3"],
    "choiceRequired": false,
    "autoProceed": false,
    "parentTextBlock": {
        "text": '<h3>For Parents</h3><p><h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p></p>',
        "backgroundColor": "#f8f3bf"
    }
},

"minority-surprise-how": {
    "kind": "exp-lookit-images-audio",
    "generateProperties": "function(expData, sequence, child, pastSessions) { let selectedImage = expData[sequence[sequence.length - 2]]['selectedImage']; const allSelections = [expData[sequence[sequence.length - 10]].selectedImage, expData[sequence[sequence.length - 8]].selectedImage, expData[sequence[sequence.length - 6]].selectedImage]; const markedPositions = [[0,1], [0,4], [1,1]]; const correctSuns = allSelections.filter(selection => markedPositions.some(pos => pos[0] === Math.floor((parseInt(selection) - 1) / 6) && pos[1] === (parseInt(selection) - 1) % 6)).length; const backgroundImage = correctSuns === 1 ? 'one_sun.png' : (correctSuns === 2 ? 'two_suns.png' : '3_suns.png'); let images = [{id: 'background', src: backgroundImage, left: 0, top: 0, width: 100, height: 100, nonChoiceOption: true, position: 'fill'}]; const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const startX = 40; images.push({ id: selectedImage, src: selectedImage + '.png', left: startX, top: ratingY, width: ratingWidth, height: ratingHeight, nonChoiceOption: true }); return { images: images, audio: 'majority_cards_how' }; }",
    "baseDir": "https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main",
    "audioTypes": ["mp3"],
    "choiceRequired": false,
    "autoProceed": false,
    "parentTextBlock": {
        "text": '<h3>For Parents</h3><p><h3>For Parents</h3><p>Please don\'t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say \'Okay!\' when your child answers - don\'t give any hints or say whether you agree!</p></p>',
        "backgroundColor": "#f8f3bf"
    }
},
        
        "explore-more-test": {
            "kind": "exp-lookit-images-audio",
            "generateProperties": "function(expData, sequence, child, pastSessions) { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: 'same', src: 'sun_dash_cards.png', left: centerOffset, top: 30, width: 25, height: 45 }); images.push({ id: 'different', src: 'background_2.png', left: centerOffset + spacing, top: 30, width: 25, height: 45 }); return { images: images }; }",
            "baseDir": "https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-private/main",
            "audio": "exploration_selection",
            "audioTypes": ["mp3"],
            "choiceRequired": true,
            "parentTextBlock": {
                "text": "Please don’t respond to anything on the screen. Feel free to replay the audio if your child was distracted. Please just say ‘Okay!’ when your child answers - don’t give any hints or say whether you agree!",
                "backgroundColor": "#f8f3bf"
            },
    "highlights": [
      {
        "range": [8, 10],
        "imageId": "same",
        "color": "yellow"
      },
      {
        "range": [11.5, 13.5],
        "imageId": "different",
        "color": "yellow"
      }
    ]
        }

                // Using same sequence as surprising condition
            },
            sequence: [
                'welcome',
                'study-intro',
                'welcome-to-my-game',
                'majority-intro-1',
                'majority-test-win',
                'majority-test-win-feedback',
                'majority-test-lose',
                'majority-test-lose-feedback',
                'majority-intro-2',
                'majority-your-turn',
                'majority-your-turn-instructions',
                'majority-select-1',
                'majority-select-1-feedback',
                'majority-select-2',
                'majority-select-2-feedback',
                'majority-select-3',
                'majority-reveal-cardbacks',
                'majority-reveal-stars',
                'majority-reveal-feedback',
                'majority-surprise-rating',
                'majority-surprise-why',
                'majority-surprise-how',
                'majority-transition',
                'minority-intro-1',
                'minority-test-win',
                'minority-test-win-feedback',
                'minority-test-lose',
                'minority-test-lose-feedback',
                'minority-intro-2',
                'minority-select-1',
                'minority-select-1-feedback',
                'minority-select-2',
                'minority-select-2-feedback',
                'minority-select-3',
                'minority-reveal-cardbacks',
                'minority-reveal-suns',
                'minority-reveal-feedback',
                'minority-surprise-rating',
                'minority-surprise-why',
                'minority-surprise-how',
                'explore-more-test',
                'video-config',
                'video-consent',
                'positioning',
                'start-recording',
                'stop-recording',
                'email-survey'
            ]
        };
    }
}