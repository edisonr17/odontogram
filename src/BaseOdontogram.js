class BaseOdontogram {
  stage = null;
  layer = null;
  constructor(stage, layer) {
    this.stage = stage;
    this.layer = layer;


  }


  /** 
   * Esta función retorna el stage actual
   */
  getStage() {
    return this.stage;
  }








  /**
   * Este metodo selecciona un fondo para el diente al clickear un simbolo
   */
  setCurrentBackground(src) {
    this.currentBackground = src;
    console.log(this.currentBackground);
  }

  symbol = null;
  setCurrentSymbol(symbol) {
    this.symbol = symbol;
  }

  getCurrentSymbol() {
    return this.symbol;
  }

  getCurrentBackground() {
    return this.currentBackground;
  }

  backgroundImagen = new Image();
  getInstanceImageBackground(src) {
    this.backgroundImagen.src = src;
    return this.backgroundImagen;
  }


  /**
   *TERMINA  Metodo para aplicar imagen en la seleccion  de caras
   */


  findInTeethObject(quadrant, idTeeth) {
    this.odontogramObject[quadrant].foreach(function (teethValue, index) {});
  }

  updateTeethObject(quadrantName, Object) {
    var odontogramInstance = this;
    // console.log(quadrantName, Object);
    this.odontogramObject[quadrantName].teeths.forEach(function (teethItem, index) {
      if (teethItem.id == Object.id) {
        odontogramInstance.odontogramObject[quadrantName].teeths[index] = Object;
        // console.log(odontogramInstance.odontogramObject);
      }
    });
  }



  /**
   * @object es la instancia del objecto que se va a pintar
   * @type si es onmouseover, onclick, onmouseleave
   *   validations:{fullTeeth:false, onlyCenter:false,   onlyFace:false},
   */
  commonSymbolValidationFalse(symbol) {
    if (symbol == null) {
      return false;
    }
    if ((symbol.validations.fullTeeth == false && symbol.validations.onlyCenter == false && symbol.validations.onlyFace == false && (symbol.validations.onlyTopBorder != true && symbol.validations.onlyBottomBorder != true))) {
      return true;
    } else {
      return false;
    }
  }

  symbolValidationBySection(symbol, type) {
    if (symbol == null) {
      return false;
    }

    if (type == "center") {
      if (symbol.validations.onlyCenter == true) {
        return true;
      }
    }
    if (type == "face") {
      if (symbol.validations.onlyFace == true) {
        return true;
      }
    }

    return false;
  }


  /**
   * 
   * @param {object} object 
   * @param {symbol} symbol 
   * @param {tipo de zona de clickear} typeZone 
   */

  validationClickOnTeeth(object, symbol, typeZone) {
    if (typeZone == "center" || typeZone == "face") {
      if ((this.commonSymbolValidationFalse(symbol)) || (this.symbolValidationBySection(symbol, typeZone))) {
        return {
          status: true,
          message: "Seleccionada correctamente"
        };
      } else {
        return {
          status: false,
          message: "No se puede clickear esta cara"
        };
      }

    } else {
      console.log(typeZone)
    }

  }


  /**
   * Esta funcion valida si el symbolo que está seleccionado se puede aplicar a una cara
   */
  validationSymbol(teeth, symbol) {
   
    var response = this.validationsSymbolByTeethStatus(teeth, symbol);
    return response;
    
  }



  validationsSymbolByTeethStatus(teeth, symbol) {
    var response = {
      canClick: false,
      message: "No se puede aplicar",
      id: null,
    };
    console.log(teeth);
    if(symbol.validations.fullTeeth == true ){
      if(teeth.sections.top.symbols == null && 
        teeth.sections.right.symbols == null && 
        teeth.sections.left.symbols == null && 
        teeth.sections.left.symbols== null && 
        teeth.sections.center.symbols == null &&
        teeth.sections.fullTeeth.symbols == null)
      {
        response.canClick =true;
        response.message="Se puede clickar";
        response.id ="#fullteeth"+teeth.id;
      }
    }

    

    return response;

  }





  odontogramObject;
  getTeeths() {
    return this.odontogramObject = {
      quadrant1: {
        teeths: [{
            id: 18,
            name: "Diente 1",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 17,
            name: "Diente 2",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 16,
            name: "Diente 3",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 15,
            name: "Diente 4",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 14,
            name: "Diente 5",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 13,
            name: "Diente 6",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 12,
            name: "Diente 7",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 11,
            name: "Diente 8",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },

        ]
      },
      quadrant2: {
        teeths: [{
            id: 21,
            name: "Diente 1",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 22,
            name: "Diente 2",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 23,
            name: "Diente 3",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 24,
            name: "Diente 4",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 25,
            name: "Diente 5",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 26,
            name: "Diente 6",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 27,
            name: "Diente 7",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 28,
            name: "Diente 8",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },

        ]
      },
      quadrant4: {
        teeths: [{
            id: 48,
            name: "Diente 1",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 47,
            name: "Diente 2",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 46,
            name: "Diente 3",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 45,
            name: "Diente 4",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 44,
            name: "Diente 5",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 43,
            name: "Diente 6",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 42,
            name: "Diente 7",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 41,
            name: "Diente 8",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },

        ]
      },
      quadrant3: {
        teeths: [{
            id: 31,
            name: "Diente 1",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 32,
            name: "Diente 2",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 33,
            name: "Diente 3",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 34,
            name: "Diente 4",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 35,
            name: "Diente 5",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 36,
            name: "Diente 6",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 37,
            name: "Diente 7",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 38,
            name: "Diente 8",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },





        ]
      }









      ,
      quadrant1Boy: {
        teeths: [{
            id: 55,
            name: "Diente 1",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 54,
            name: "Diente 2",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 53,
            name: "Diente 3",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 52,
            name: "Diente 4",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 51,
            name: "Diente 5",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
        ]
      }



      ,
      quadrant2Boy: {
        teeths: [{
            id: 61,
            name: "Diente 1",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 62,
            name: "Diente 2",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 63,
            name: "Diente 3",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 64,
            name: "Diente 4",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 65,
            name: "Diente 5",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
        ]
      },
      quadrant4Boy: {
        teeths: [{
            id: 85,
            name: "Diente 1",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 84,
            name: "Diente 2",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 83,
            name: "Diente 3",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 82,
            name: "Diente 4",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 81,
            name: "Diente 5",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
        ]
      },
      quadrant3Boy: {
        teeths: [{
            id: 71,
            name: "Diente 1",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 72,
            name: "Diente 2",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 73,
            name: "Diente 3",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 74,
            name: "Diente 4",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
          {
            id: 75,
            name: "Diente 5",
            type: "",
            position: "",
            sections: {
              rx: {
                symbols: null
              },
              top: {
                symbols: null
              },
              left: {
                symbols: null
              },
              down: {
                symbols: null
              },
              right: {
                symbols: null
              },
              center: {
                symbols: null
              },
              borderTop: {
                symbols: null
              },
              borderBottom: {
                symbols: null
              },
              fullTeeth: {
                status: false,
                symbols: null
              }
            }
          },
        ]
      }




    };
  }

  getTeethsByQuadrant(cuadrantName) {
    return this.getTeeths()[cuadrantName];
  }



}