package gneellaan

class GenericDomain {
    
    private final Class clazz

    GenericDomain(Class clazz) {
        this.clazz = clazz
     }
      
     def invokeMethod(String name, args) {
        this.clazz."$name"(*args)   
     }

}
