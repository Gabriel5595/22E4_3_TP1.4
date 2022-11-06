const nome = 'Infnet';
const anoDeFundacao = 2009;

const colegio = {
  nome, anoDeFundacao,
  exibir: function(){
    alert(`${this.nome} foi fundado em ${this.anoDeFundacao}`);
  }
}

colegio.exibir();