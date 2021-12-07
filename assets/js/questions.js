/* jshint esversion: 8 */

const questions = [
    {
        question: 'Which Italian city is home of the car manufacturer Fiat?',
        answers: [
            { option: 'Turin', correct: true },
            { option: 'Maranello', correct: false },
            { option: 'Modena', correct: false },
            { option: 'Rome', correct: false }                     
        ]
    },
    {
        question: 'In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.',
        answers: [
            { option: 'True', correct: true },
            { option: 'False', correct: false }                     
        ]
    },
    {
        question: 'Which of the following is NOT a Russian car manufacturer?',
        answers: [
            { option: 'BYD', correct: true },
            { option: 'Silant', correct: false },
            { option: 'Dragon', correct: false },
            { option: 'GAZ', correct: false }                     
        ]
    },
    {
        question: 'Which of the following car models has been badge-engineered (rebadged) the most?',
        answers: [
            { option: 'Isuzu Trooper', correct: true },
            { option: 'Holden Monaro', correct: false },
            { option: 'Suzuki Swift', correct: false },
            { option: 'Chevy Camaro', correct: false }                     
        ]
    },
    {
        question: 'The Chevrolet Corvette has always been made exclusively with V8 engines only.',
        answers: [
            { option: 'True', correct: false },
            { option: 'False', correct: true }                     
        ]
    },
    {
        question: 'What UK Train does NOT go over 125MPH?',
        answers: [
            { option: 'Sprinter', correct: true },
            { option: 'Class 43', correct: false },
            { option: 'Javelin', correct: false },
            { option: 'Pendolino', correct: false }                     
        ]
    },
    {
        question: 'Which of these is NOT a car model produced by Malaysian car manufacturer Proton?',
        answers: [
            { option: 'Kelisa', correct: true },
            { option: 'Saga', correct: false },
            { option: 'Perdana', correct: false },
            { option: 'Inspira', correct: false }                     
        ]
    },
    {
        question: 'Which of these companies does NOT manufacture motorcycles?',
        answers: [
            { option: 'Toyota', correct: true },
            { option: 'Honda', correct: false },
            { option: 'Kawasaki', correct: false },
            { option: 'Yamaha', correct: false }                     
        ]
    },
    {
        question: 'Which one of these chassis codes are used by BMW 3-series?',
        answers: [
            { option: 'E46', correct: true },
            { option: 'E39', correct: false },
            { option: 'E85', correct: false },
            { option: 'F10', correct: false }                     
        ]
    },
    {
        question: 'Which supercar company is from Sweden?',
        answers: [
            { option: 'Koenigsegg', correct: true },
            { option: 'Bugatti', correct: false },
            { option: 'Lambogini', correct: false },
            { option: 'Mclaren', correct: false }                     
        ]
    },
    {
        question: 'Which car brand does NOT belong to General Motors?',
        answers: [
            { option: 'Ford', correct: true },
            { option: 'Buick', correct: false },
            { option: 'Cadillac', correct: false },
            { option: 'Chevrolet', correct: false }                     
        ]
    },
    {
        question: 'Which car is the first mass-produced hybrid vehicle?',
        answers: [
            { option: 'Toyota Prius', correct: true },
            { option: 'Chevrolet Volt', correct: false },
            { option: 'Honda Fit', correct: false },
            { option: 'Peugeot 308 R Hybrid', correct: false }                     
        ]
    },
    {
        question: 'Which of these car models are produced by Lamborghini?',
        answers: [
            { option: 'Aventador', correct: true },
            { option: 'Huayra', correct: false },
            { option: '918', correct: false },
            { option: 'Chiron', correct: false }                     
        ]
    },
    {
        question: 'When BMW was established in 1916, it was producing automobiles.',
        answers: [
            { option: 'True', correct: false },
            { option: 'False', correct: true }                 
        ]
    },
    {
        question: 'What do the 4 Rings in Audis Logo represent?',
        answers: [
            { option: 'Previously independent automobile manufacturers', correct: true },
            { option: 'States in which Audi makes the most sales', correct: false },
            { option: 'Main cities vital to Audi', correct: false },
            { option: 'Countries in which Audi makes the most sales', correct: false }                     
        ]
    },
    {
        question: 'Arriva is owned by the Deutsche Bahn.',
        answers: [
            { option: 'True', correct: true },
            { option: 'False', correct: false }              
        ]
    },
    {
        question: 'Which one of the following is NOT a sub-company of the Volkswagen Group?',
        answers: [
            { option: 'Opel', correct: true },
            { option: 'Porche', correct: false },
            { option: 'Bugatti', correct: false },
            { option: 'Bently', correct: false }                     
        ]
    },
    {
        question: 'Ferrari has never made a V10 engine for any of its cars.',
        answers: [
            { option: 'True', correct: false },
            { option: 'False', correct: true }               
        ]
    },
    {
        question: 'In 2014, over 6 million General Motors vehicles were recalled due to what critical flaw?',
        answers: [
            { option: 'Faulty ignition switch', correct: true },
            { option: 'Malfunctioning gas pedals', correct: false },
            { option: 'Breaking fuel lines', correct: false },
            { option: 'Faulty brake pads', correct: false }                     
        ]
    },
    {
        question: 'When was Cadillac founded?',
        answers: [
            { option: '1902', correct: true },
            { option: '1956', correct: false },
            { option: '1924', correct: false },
            { option: '1825', correct: false }                     
        ]
    },
    {
        question: 'What are the cylinder-like parts that pump up and down within the engine?',
        answers: [
            { option: 'Pistons', correct: true },
            { option: 'Leaf Springs', correct: false },
            { option: 'Radiators', correct: false },
            { option: 'ABS', correct: false }                     
        ]
    },
    {
        question: 'Which one of the following is not made by Ford?',
        answers: [
            { option: 'Camry', correct: true },
            { option: 'Fusion', correct: false },
            { option: 'Model A', correct: false },
            { option: 'F-150', correct: false }                     
        ]
    },
    {
        question: 'What model was the sports car gifted to Yuri Gagarin by the French government in 1965?',
        answers: [
            { option: 'Matra Djet', correct: true },
            { option: 'Porche 911', correct: false },
            { option: 'Alpine A110', correct: false },
            { option: 'AC Cobra', correct: false }                     
        ]
    },
    {
        question: 'The LS2 engine is how many cubic inches?',
        answers: [
            { option: '364', correct: true },
            { option: '346', correct: false },
            { option: '376', correct: false },
            { option: '402', correct: false }                     
        ]
    },
    {
        question: 'What is the name of Nissans most popular electric car?',
        answers: [
            { option: 'Leaf', correct: true },
            { option: 'Tree', correct: false },
            { option: 'Deer', correct: false },
            { option: 'Roots', correct: false }                     
        ]
    },
    {
        question: 'Which car manufacturer created the Aventador?',
        answers: [
            { option: 'Lamborghini', correct: true },
            { option: 'BMW', correct: false },
            { option: 'Audi', correct: false },
            { option: 'Bugatti', correct: false }                     
        ]
    },
    {
        question: 'What year did the Chevrolet LUV mini truck make its debut?',
        answers: [
            { option: '1972', correct: true },
            { option: '1982', correct: false },
            { option: '1992', correct: false },
            { option: '1546', correct: false }                     
        ]
    },
    {
        question: 'What kind of train was Stepney, a train on the Bluebell Railway notable for his appearance in The Railway Series',
        answers: [
            { option: 'LB&amp;SCR A1X', correct: true },
            { option: 'LB&amp;SCR E2', correct: false },
            { option: 'LB&amp;SCR J1', correct: false },
            { option: 'LB&amp;SCR D1', correct: false }                     
        ]
    },
    {
        question: 'What country was the Trabant 601 manufactured in?',
        answers: [
            { option: 'East Germany', correct: true },
            { option: 'Soviet Union', correct: false },
            { option: 'Hungary', correct: false },
            { option: 'France', correct: false }                     
        ]
    },
    {
        question: 'Which of these cars is NOT considered one of the 5 Modern Supercars by Ferrari?',
        answers: [
            { option: 'Testarossa', correct: true },
            { option: 'Enzo Ferrari', correct: false },
            { option: 'F40', correct: false },
            { option: '288 GTO', correct: false }                     
        ]
    }
];
