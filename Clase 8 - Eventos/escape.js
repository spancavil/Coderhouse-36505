  //Ver qué sucede sin el return
  
  //On escape it will close
  useEffect(() => {
    const handleEsc = (event) => {
        if (event.keyCode === 27) {
          console.log('will close')
        }
      };

      console.log(event) //Evento sintético de React
      console.log(event.nativeEvent) //Evento nativo de JS
    
      window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [])