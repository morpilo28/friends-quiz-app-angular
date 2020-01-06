import { AnswerModel } from '../answerModel/answer-model';

export interface QuestionModel {
    id: number;
    question: string;
    isAnswered: boolean;
    selectedAnswerId: number;
    correctAnswerId: number;
    answers: AnswerModel[];
}
