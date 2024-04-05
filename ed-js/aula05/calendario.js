const meses = [
    { nome: "Janeiro", dias: 31 },
    { nome: "Fevereiro", dias: 28 },
    { nome: "Março", dias: 31 },
    { nome: "Abril", dias: 30 },
    { nome: "Maio", dias: 31 },
    { nome: "Junho", dias: 30 },
    { nome: "Julho", dias: 31 },
    { nome: "Agosto", dias: 31 },
    { nome: "Setembro", dias: 30 },
    { nome: "Outubro", dias: 31 },
    { nome: "Novembro", dias: 30 },
    { nome: "Dezembro", dias: 31 }
  ];
  
  const calendario = [];
  
  for (let i = 0; i < 12; i++) {
    calendario[i] = [];
    calendario[i].push(meses[i].nome);
    for (let j = 0; j < meses[i].dias; j++) {
      calendario[i].push(j + 1); 
    }
  }
  
  console.table(calendario);
  