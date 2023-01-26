var quiz = {
  user: "Dave",
  questions: [
  {
    text: "A second alkanol can be oxidized to give an?",
    responses: [
    { text: "alkyne" },
    { text: "alkanone", correct: true },
    { text: "alkanoic acid" },
    { text: "alkanal" }] },


  {
    text: "Which of the following will give a precipitate with an aqueous solution of copper (I) chloride?",
    responses: [
    { text: "But-1-yne", correct: true },
    { text: "But-2-ene" },
    { text: "But-2-yne" },
    { text: "But-1-ene" }] },


  {
    text: "2-methylprop-1-ene is an isomer of",
    responses: [
    { text: "3-methyl but-1-ene" },
    { text: "but-2-ene", correct: true },
    { text: "2-methyl but-1-ene" },
    { text: "pent-2-ene" }] },


  {
    text: "Synthetic rubber is obtained from the polymerization of",
    responses: [
    { text: "isoprene", correct: true },
    { text: "neoprene" },
    {
      text: "butandiene" },

    { text: "propylene" }] },


  {
    text: "Burning magnesium ribbon in air removes which of the following (i) oxygen (ii) nitrogen (iii) argon and (iv) carbon(iv)oxide?",
    responses: [
    { text: "i and iv only " },
    {
      text: "i, ii, iii and iv only" },

    { text: " i only", correct: true },
    { text: "i and ii only" }] },


  {
    text:
    "Which of the following is the best starting material for the preparation of oxygen? Heating of trioxonitrate (v) with",
    responses: [
    { text: "LQ" },
    { text: " Zn" },
    { text: " Pb", correct: true },
    { text: "None of the above" }] },


  {
    text: "Which of the following metals is the most essential in the regulation of blood volume, blood pressure and osmotic equilibrium?",
    responses: [
    { text: " Sodium", correct: true },
    { text: " Zinc" },
    {
      text: "Manganese" },

    { text: "Money" }] },


  {
    text: "Which of the following statements does not show Rutherford's account of Nuclear Theory? An atom contains a region",
    responses: [
    { text: "which is positively charged" },
    { text: "which is massive and can cause deflection of a few projectiles", correct: true },
    { text: "which contains protons and neutrons " },
    { text: "None of the above" }] },


  {
    text:
    "Which process(es) is/are involved in the turning of starch iodide paper blue-black by chlorine gas?",
    responses: [
    {
      text: "Hyper text marking language" },

    { text: "chlorine attacks the starch to give the blue-black color " },
    { text: "chlorine oxidizes the iodide ion to produce iodine which attacks the starch to give the blue-black color", correct: true },
    { text: "  iodine attacks the starch to give the blue-black color" }] },


  {
    text: "Which of the following alkaline metals react more quickly spontaneously with water?",
    responses: [
    { text: "Beryllium " },
    { text: "Calcium", correct: true },
    { text: "Magnesium" },
    { text: "Strontium" }] }] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    quizStarted: true,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },


  methods: {
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });