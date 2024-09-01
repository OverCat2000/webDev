import {conscientiousness} from '../assets/images';
import {extraversion} from '../assets/images';
import {agreeableness} from '../assets/images';
import {neuroticism} from '../assets/images';
import {openness} from '../assets/images';
import {cigarettes, mushrooms, alcohol} from '../assets/images';

export const personalities = [
    {image: conscientiousness, title: 'Conscientiousness', description: 'Conscientiousness is a tendency to show self-discipline, act dutifully, and aim for achievement. It is the quality of being honest and having strong moral principles; moral uprightness.'},
    {image: extraversion, title: 'Extraversion', description: 'Extraversion is characterized by excitability, sociability, talkativeness, assertiveness, and high amounts of emotional expressiveness.'},
    {image: agreeableness, title: 'Agreeableness', description: 'Agreeableness is a tendency to be compassionate and cooperative rather than suspicious and antagonistic towards others. It is also a measure of one’s trusting and helpful nature, and whether a person is generally well-tempered or not.'},
    {image: neuroticism, title: 'Neuroticism', description: 'Neuroticism is the tendency to experience negative emotions, such as anger, anxiety, or depression. It is sometimes called emotional instability, or is reversed and referred to as emotional stability.'},
    {image: openness, title: 'Openness', description: 'Openness is a general appreciation for art, emotion, adventure, unusual ideas, imagination, curiosity, and variety of experience. People who are open to experience are intellectually curious, open to emotion, sensitive to beauty and willing to try new things.'}
]

// create some statistics about drug use, thing like overdose, deaths, etc
export const statistics = [
    {title: 'Overdose', value: '1.5M', description: 'The number of people who have overdosed on drugs in the past year.'},
    {title: 'Deaths', value: '70K', description: 'The number of people who have died from drug-related causes in the past year.'},
    {title: 'Addiction', value: '5M', description: 'The number of people who are addicted to drugs in the past year.'},
    {title: 'Rehabilitation', value: '10M', description: 'The number of people who have gone to rehab in the past year.'}
]

export const drugTypes = [
    {title: 'Cigarettes', image: cigarettes, description: 'Cigarettes are a type of drug that is smoked. It is made from tobacco and is highly addictive.'},
    {title: 'Mushrooms', image: mushrooms, description: 'Mushrooms are a type of drug that is eaten. It is a type of psychedelic drug that can cause hallucinations.'},
    {title: 'Alcohol', image: alcohol, description: 'Alcohol is a type of drug that is drunk. It is a depressant that can cause intoxication.'}
]
