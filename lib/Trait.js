export default class Trait {

    static inject(target, trait) {

        var targetPrototype;

        // class / constructor function given
        if (typeof target == 'function') {

            targetPrototype = target.prototype;

        } else {

            // instance given
            targetPrototype = target;
        }

        var traitMemberNames = Object.getOwnPropertyNames(trait.prototype);

        for (var i=0; i<traitMemberNames.length; i++) {

            if (traitMemberNames[i] == 'constructor') continue;

            targetPrototype[traitMemberNames[i]] = trait.prototype[traitMemberNames[i]];
        }
        targetPrototype.onInject.call(targetPrototype);

        return target;
    }
}