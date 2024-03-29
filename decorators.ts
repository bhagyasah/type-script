@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError('Oops boat was shunk in the ocean')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
    ): void {
   if (speed === 'fast') {
     console.log('swish');
   } else {
     console.log('nothing')
   }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}


function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index)
}

function  testDecorator(target: any, key: string) {
  // console.log(target.color)
  console.log(key);
}


function logError(errorMessage: string) {
 return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method('fast')
      } catch(e) {
        console.log(errorMessage);
      }
    }
  }
}
