## Iniciar

### Skaffold

`skaffold dev`

Haurien de sortir per consola tots els logs de cada servei. Com que executem amb nodemon o amb create-react-app, està en mode _watch_ i per tant en canviar fitxers i guardar-los a dins del pod (fer a la configuració), els canvis es detecten i s'actualiza el pod.

### Ingress-nginx

Tenir el `ingress-nginx` instal·lat i executant-se al Cluster de Kubernetes (Enllaç: https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml`

Mirar amb `kubectl get pods --namespace=ingress-nginx` si hi ha el pods pertinents executant-se

#### K8s deployments (si no skaffold)

A `infra/k8s` executar `kubectl apply -f .` per a iniciar els deployments dels serveis. Això per iniciar si no estan corrent ja.

Ordres útils:

- `kubectl get pods`
- `kubectl get services`
- `kubectl get deployments`
- `kubectl rollout restart deployment [name]`
