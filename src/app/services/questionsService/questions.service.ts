import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuestionModel } from 'src/app/models/questionModel/question-model';

@Injectable({
    providedIn: 'root'
})
export class QuestionsService {
    private questions: BehaviorSubject<QuestionModel[]>;
    private questionsArray: QuestionModel[] = [
        {
            id: 0,
            question: "Who Created the Europe Story?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 1,
            answers: [
                {
                    answer: "Joey",
                    id: 1
                },
                {
                    answer: "Rachel",
                    id: 2
                },
                {
                    answer: "Ross",
                    id: 3
                },
                {
                    answer: "Phoebe",
                    id: 4
                }
            ]
        },
        {
            id: 1,
            question: "Ross panics to see his son with?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 3,
            answers: [
                {
                    answer: "A girl",
                    id: 1
                },
                {
                    answer: "A boy",
                    id: 2
                },
                {
                    answer: "A barbie doll",
                    id: 3
                },
                {
                    answer: "A monkey",
                    id: 4
                }
            ]
        },
        {
            id: 2,
            question: "Desperately Monica agrees to go on a date with?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 2,
            answers: [
                {
                    answer: "Ross",
                    id: 1
                },
                {
                    answer: "One of the restaurant customers",
                    id: 2
                },
                {
                    answer: "Chandler",
                    id: 3
                },
                {
                    answer: "Joey",
                    id: 4
                }
            ]
        },
        {
            id: 3,
            question: "Ross lesbian ex-wife name is?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 1,
            answers: [
                {
                    answer: "Carol Willick",
                    id: 1
                },
                {
                    answer: "Rachel Green",
                    id: 2
                },
                {
                    answer: "Carol Wacko",
                    id: 3
                },
                {
                    answer: "Carol Cohen",
                    id: 4
                }
            ]
        },
        {
            id: 4,
            question: "Rachel regret the decision of?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 1,
            answers: [
                {
                    answer: "Making a date for Chandler and her boss",
                    id: 1
                },
                {
                    answer: "Having a relation with chandler",
                    id: 2
                },
                {
                    answer: "She did not regret anything",
                    id: 3
                },
                {
                    answer: "Dating Joey",
                    id: 4
                }
            ]
        },
        {
            id: 5,
            question: "What game did the gang play on Thanksgiving?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 2,
            answers: [
                {
                    answer: "Truth and dare",
                    id: 1
                },
                {
                    answer: "Touch football",
                    id: 2
                },
                {
                    answer: "Chess",
                    id: 3
                },
                {
                    answer: "Spin the bottle",
                    id: 4
                }
            ]
        },
        {
            id: 6,
            question: "What did Janice asked the gang?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 3,
            answers: [
                {
                    answer: "Is anyone gay",
                    id: 1
                },
                {
                    answer: "Does anyone knows Rachel secret",
                    id: 2
                },
                {
                    answer: "Have anyone slept with one another",
                    id: 3
                },
                {
                    answer: "Is her laughter annoying",
                    id: 4
                }
            ]
        },
        {
            id: 7,
            question: "What is the name of Rachel’s old high school boyfriend?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 4,
            answers: [
                {
                    answer: "Chip Conway",
                    id: 1
                },
                {
                    answer: "Chip Theman",
                    id: 2
                },
                {
                    answer: "Chip Hasbeen",
                    id: 3
                },
                {
                    answer: "Chip Matthews",
                    id: 4
                }
            ]
        },
        {
            id: 8,
            question: "Who was the character in Ross's fantasy, which he tells Rachel and Chandler?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 2,
            answers: [
                {
                    answer: "dorothy from the wizard of oz",
                    id: 1
                },
                {
                    answer: "Princess Leia",
                    id: 2
                },
                {
                    answer: "Wonder woman",
                    id: 3
                },
                {
                    answer: "Mary Poppins",
                    id: 4
                }
            ]
        },
        {
            id: 9,
            question: "Monica buys a new bed from?",
            isAnswered: false,
            selectedAnswerId: null,
            correctAnswerId: 1,
            answers: [
                {
                    answer: "Mattress king",
                    id: 1
                },
                {
                    answer: "A cheap seller",
                    id: 2
                },
                {
                    answer: "Mattress prince",
                    id: 3
                },
                {
                    answer: "Mattress queen",
                    id: 4
                }
            ]
        }
    ]
    private observable: Observable<QuestionModel[]>;

    constructor() {
        this.questions = new BehaviorSubject<QuestionModel[]>(this.questionsArray);
        this.observable = new Observable((o) => {
            this.questions.subscribe(res => {
                o.next(res)
            })
        })
    }

    getQuestions():Observable<QuestionModel[]> {
        return this.observable;
    }
}
