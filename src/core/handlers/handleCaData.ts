import { State } from 'router5';
import Store from '../store';
import { RouteParams, Suggestion } from '../types';

export default async function handleCaData(toState: State, store: Store) {
  // store ca from route to state
  if (toState.params.ca) {
    store.setCa(toState.params.ca);
  }

  // delete routes
  if (toState.name === 'cas.delete' && toState.params.asn) {
    await store.deleteRoute(toState.params as RouteParams);
    return Promise.reject({ redirect: {name: 'cas', params: { ca: store.ca }} });
  }

  // add routes
  if (toState.name === 'cas.add' && toState.params.asn) {
    await store.addRoute(toState.params as RouteParams);
    return Promise.reject({ redirect: {name: 'cas', params: { ca: store.ca }} });
  }

  if (toState.name === 'cas.change' && toState.params.ids) {
    const ids: string[] = JSON.parse(toState.params.ids);
    console.log(`ids ${ids}`);
    const suggestions = store.getSuggestions().filter(suggestion => ids.includes(suggestion.id || ''));
    console.log(`suggestions ${suggestions}`);
    const add: Suggestion[] = [];
    const remove: Suggestion[] = [];
    for (const suggestion of suggestions) {
      if (suggestion.action === 'add') {
        add.push(suggestion);
      } else if (suggestion.action === 'remove') {
        remove.push(suggestion);
      }
    }
    await store.changeRoutes(add, remove);
    return Promise.reject({redirect: {name: 'cas', params: {ca: store.ca}}});
  }

  // load a list of available ca's
  await store.loadCas();

  // navigate to specific ca page
  if (toState.name === 'home' && store.ca) {
    return Promise.reject({ redirect: {name: 'cas', params: { ca: store.ca }} });
  }

  // only fetch details on cas route
  if (toState.name.startsWith('cas')) {
    // load ca details and roa's
    await store.loadCa();
    await store.loadRepoStatus();
    await store.loadParents();
  }
}
