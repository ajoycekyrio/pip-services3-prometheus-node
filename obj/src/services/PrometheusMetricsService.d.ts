import { IReferences } from 'pip-services3-commons-node';
import { RestService } from 'pip-services3-rpc-node';
/**
 * Service that exposes <code>"/metrics"</code> route for Prometheus to scap performance metrics.
 *
 * ### Configuration parameters ###
 *
 * - dependencies:
 *   - endpoint:              override for HTTP Endpoint dependency
 *   - prometheus-counters:   override for PrometheusCounters dependency
 * - connection(s):
 *   - discovery_key:         (optional) a key to retrieve the connection from IDiscovery
 *   - protocol:              connection protocol: http or https
 *   - host:                  host name or IP address
 *   - port:                  port number
 *   - uri:                   resource URI or connection string with all parameters in it
 *
 * ### References ###
 *
 * - <code>\*:logger:\*:\*:1.0</code>         (optional) [[https://rawgit.com/pip-services-node/pip-services3-components-node/master/doc/api/interfaces/log.ilogger.html ILogger]] components to pass log messages
 * - <code>\*:counters:\*:\*:1.0</code>         (optional) [[https://rawgit.com/pip-services-node/pip-services3-components-node/master/doc/api/interfaces/count.icounters.html ICounters]] components to pass collected measurements
 * - <code>\*:discovery:\*:\*:1.0</code>        (optional) [[https://rawgit.com/pip-services-node/pip-services3-components-node/master/doc/api/interfaces/connect.idiscovery.html IDiscovery]] services to resolve connection
 * - <code>\*:endpoint:http:\*:1.0</code>          (optional) [[https://rawgit.com/pip-services-node/pip-services3-rpc-node/master/doc/api/classes/services.httpendpoint.html HttpEndpoint]] reference to expose REST operation
 * - <code>\*:counters:prometheus:\*:1.0</code>    [[PrometheusCounters]] reference to retrieve collected metrics
 *
 * @see [[https://rawgit.com/pip-services-node/pip-services3-rpc-node/master/doc/api/classes/services.restservice.html RestService]]
 * @see [[https://rawgit.com/pip-services-node/pip-services3-rpc-node/master/doc/api/classes/clients.restclient.html RestClient]]
 *
 * ### Example ###
 *
 *     let service = new PrometheusMetricsService();
 *     service.configure(ConfigParams.fromTuples(
 *         "connection.protocol", "http",
 *         "connection.host", "localhost",
 *         "connection.port", 8080
 *     ));
 *
 *     service.open("123", (err) => {
 *        console.log("The Prometheus metrics service is accessible at http://+:8080/metrics");
 *     });
 */
export declare class PrometheusMetricsService extends RestService {
    private _cachedCounters;
    private _source;
    private _instance;
    /**
     * Creates a new instance of this service.
     */
    constructor();
    /**
     * Sets references to dependent components.
     *
     * @param references 	references to locate the component dependencies.
     */
    setReferences(references: IReferences): void;
    /**
     * Registers all service routes in HTTP endpoint.
     */
    register(): void;
    /**
     * Handles metrics requests
     *
     * @param req   an HTTP request
     * @param res   an HTTP response
     */
    private metrics;
}