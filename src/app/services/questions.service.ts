import { Injectable } from '@angular/core';
import { quesDataModel } from "../shared/question.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private quesData : quesDataModel[] = 
  [
    {
      qid: 1,
      question: "Which is the largest country in the world by population?",
      options: ["India", "USA", "China", "Russia"],
      answer: "China"
    },
    {
      qid: 2,
      question: "When did the second world war end?",
      options: ["1945", "1939", "1944", "1942"],
      answer: "1945"
    },
    {
      qid: 3,
      question: "Which was the first country to issue paper currency?",
      options: ["USA", "France", "Italy", "China"],
      answer: "China"
    },
    {
      qid: 4,
      question: "Which city hosted the 1996 Summer Olympics?",
      options: ["Atlanta", "Sydney", "Athens", "Beijing"],
      answer: "Atlanta"
    },
    {
      qid: 5,
      question: "Who invented telephone?",
      options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
      answer: "Alexander Graham Bell"
    }
  ]

  getData(id){
    return this.quesData[id];
  }

  getAns(id)
  {
    return this.quesData[id].answer
  }


  constructor() { }
}
