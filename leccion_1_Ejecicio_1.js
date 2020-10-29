function totalMinutos(horas, minutos){
    return horas * 60 + minutos;
  }
  
  document.write(totalMinutos(5, 25));
  document.write(totalMinutos(1, 5));
  document.write(totalMinutos(0, 15));
  
  function cantidadRecolectadaSimple(costo, cantidad){
    return costo * cantidad;
  }
  
  document.write(cantidadRecolectadaSimple(10, 5));
  document.write(cantidadRecolectadaSimple(1, 5));
  
  function cantidadRecolectada(costoEstudiante, costoAdulto, cantidadEstudiantes, cantidadAdultos){
    return cantidadRecolectadaSimple(costoEstudiante, cantidadEstudiantes) + cantidadRecolectadaSimple(costoAdulto, cantidadAdultos);
  }
  
  document.write(cantidadRecolectada(1, 5, 20, 4));
  document.write(cantidadRecolectada(0, 5, 20, 3));