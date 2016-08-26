import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';

interface State {
    user: Object;
    isLoading: boolean;
    items: any[];
}

const state: State = {
    user: {},
    isLoading: false,
    items: []
};


const store = new BehaviorSubject<State>(state);

export class AppStore {
    store = store;
    changes = store
        .asObservable()
        .distinctUntilChanged()
        // log new state
        .do(changes => console.log('new state', changes))

    getState() {
        return this.store.value;
    }

    setState(state: State) {
        console.log('setState ', state); // log update
        this.store.next(state);
    }
}