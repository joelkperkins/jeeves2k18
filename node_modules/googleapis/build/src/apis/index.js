"use strict";
// Copyright 2012-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const abusiveexperiencereport = require("./abusiveexperiencereport");
const acceleratedmobilepageurl = require("./acceleratedmobilepageurl");
const adexchangebuyer = require("./adexchangebuyer");
const adexchangebuyer2 = require("./adexchangebuyer2");
const adexperiencereport = require("./adexperiencereport");
const admin = require("./admin");
const adsense = require("./adsense");
const adsensehost = require("./adsensehost");
const analytics = require("./analytics");
const analyticsreporting = require("./analyticsreporting");
const androiddeviceprovisioning = require("./androiddeviceprovisioning");
const androidenterprise = require("./androidenterprise");
const androidmanagement = require("./androidmanagement");
const androidpublisher = require("./androidpublisher");
const appengine = require("./appengine");
const appsactivity = require("./appsactivity");
const appstate = require("./appstate");
const bigquery = require("./bigquery");
const bigquerydatatransfer = require("./bigquerydatatransfer");
const binaryauthorization = require("./binaryauthorization");
const blogger = require("./blogger");
const books = require("./books");
const calendar = require("./calendar");
const chat = require("./chat");
const civicinfo = require("./civicinfo");
const classroom = require("./classroom");
const cloudbilling = require("./cloudbilling");
const cloudbuild = require("./cloudbuild");
const clouddebugger = require("./clouddebugger");
const clouderrorreporting = require("./clouderrorreporting");
const cloudfunctions = require("./cloudfunctions");
const cloudiot = require("./cloudiot");
const cloudkms = require("./cloudkms");
const cloudprofiler = require("./cloudprofiler");
const cloudresourcemanager = require("./cloudresourcemanager");
const cloudshell = require("./cloudshell");
const cloudtasks = require("./cloudtasks");
const cloudtrace = require("./cloudtrace");
const composer = require("./composer");
const compute = require("./compute");
const container = require("./container");
const content = require("./content");
const customsearch = require("./customsearch");
const dataflow = require("./dataflow");
const dataproc = require("./dataproc");
const datastore = require("./datastore");
const deploymentmanager = require("./deploymentmanager");
const dfareporting = require("./dfareporting");
const dialogflow = require("./dialogflow");
const digitalassetlinks = require("./digitalassetlinks");
const discovery = require("./discovery");
const dlp = require("./dlp");
const dns = require("./dns");
const doubleclickbidmanager = require("./doubleclickbidmanager");
const doubleclicksearch = require("./doubleclicksearch");
const drive = require("./drive");
const file = require("./file");
const firebasedynamiclinks = require("./firebasedynamiclinks");
const firebaserules = require("./firebaserules");
const firestore = require("./firestore");
const fitness = require("./fitness");
const fusiontables = require("./fusiontables");
const games = require("./games");
const gamesConfiguration = require("./gamesConfiguration");
const gamesManagement = require("./gamesManagement");
const genomics = require("./genomics");
const gmail = require("./gmail");
const groupsmigration = require("./groupsmigration");
const groupssettings = require("./groupssettings");
const iam = require("./iam");
const iamcredentials = require("./iamcredentials");
const iap = require("./iap");
const identitytoolkit = require("./identitytoolkit");
const indexing = require("./indexing");
const jobs = require("./jobs");
const kgsearch = require("./kgsearch");
const language = require("./language");
const licensing = require("./licensing");
const logging = require("./logging");
const manufacturers = require("./manufacturers");
const mirror = require("./mirror");
const ml = require("./ml");
const monitoring = require("./monitoring");
const oauth2 = require("./oauth2");
const oslogin = require("./oslogin");
const pagespeedonline = require("./pagespeedonline");
const partners = require("./partners");
const people = require("./people");
const playcustomapp = require("./playcustomapp");
const plus = require("./plus");
const plusDomains = require("./plusDomains");
const poly = require("./poly");
const proximitybeacon = require("./proximitybeacon");
const pubsub = require("./pubsub");
const redis = require("./redis");
const replicapool = require("./replicapool");
const replicapoolupdater = require("./replicapoolupdater");
const reseller = require("./reseller");
const runtimeconfig = require("./runtimeconfig");
const safebrowsing = require("./safebrowsing");
const script = require("./script");
const searchconsole = require("./searchconsole");
const servicebroker = require("./servicebroker");
const serviceconsumermanagement = require("./serviceconsumermanagement");
const servicecontrol = require("./servicecontrol");
const servicemanagement = require("./servicemanagement");
const serviceusage = require("./serviceusage");
const serviceuser = require("./serviceuser");
const sheets = require("./sheets");
const siteVerification = require("./siteVerification");
const slides = require("./slides");
const sourcerepo = require("./sourcerepo");
const spanner = require("./spanner");
const speech = require("./speech");
const sqladmin = require("./sqladmin");
const storage = require("./storage");
const storagetransfer = require("./storagetransfer");
const streetviewpublish = require("./streetviewpublish");
const surveys = require("./surveys");
const tagmanager = require("./tagmanager");
const tasks = require("./tasks");
const testing = require("./testing");
const texttospeech = require("./texttospeech");
const toolresults = require("./toolresults");
const tpu = require("./tpu");
const translate = require("./translate");
const urlshortener = require("./urlshortener");
const vault = require("./vault");
const videointelligence = require("./videointelligence");
const vision = require("./vision");
const webfonts = require("./webfonts");
const webmasters = require("./webmasters");
const websecurityscanner = require("./websecurityscanner");
const youtube = require("./youtube");
const youtubeAnalytics = require("./youtubeAnalytics");
const youtubereporting = require("./youtubereporting");
exports.APIS = {
    abusiveexperiencereport: abusiveexperiencereport.VERSIONS,
    acceleratedmobilepageurl: acceleratedmobilepageurl.VERSIONS,
    adexchangebuyer: adexchangebuyer.VERSIONS,
    adexchangebuyer2: adexchangebuyer2.VERSIONS,
    adexperiencereport: adexperiencereport.VERSIONS,
    admin: admin.VERSIONS,
    adsense: adsense.VERSIONS,
    adsensehost: adsensehost.VERSIONS,
    analytics: analytics.VERSIONS,
    analyticsreporting: analyticsreporting.VERSIONS,
    androiddeviceprovisioning: androiddeviceprovisioning.VERSIONS,
    androidenterprise: androidenterprise.VERSIONS,
    androidmanagement: androidmanagement.VERSIONS,
    androidpublisher: androidpublisher.VERSIONS,
    appengine: appengine.VERSIONS,
    appsactivity: appsactivity.VERSIONS,
    appstate: appstate.VERSIONS,
    bigquery: bigquery.VERSIONS,
    bigquerydatatransfer: bigquerydatatransfer.VERSIONS,
    binaryauthorization: binaryauthorization.VERSIONS,
    blogger: blogger.VERSIONS,
    books: books.VERSIONS,
    calendar: calendar.VERSIONS,
    chat: chat.VERSIONS,
    civicinfo: civicinfo.VERSIONS,
    classroom: classroom.VERSIONS,
    cloudbilling: cloudbilling.VERSIONS,
    cloudbuild: cloudbuild.VERSIONS,
    clouddebugger: clouddebugger.VERSIONS,
    clouderrorreporting: clouderrorreporting.VERSIONS,
    cloudfunctions: cloudfunctions.VERSIONS,
    cloudiot: cloudiot.VERSIONS,
    cloudkms: cloudkms.VERSIONS,
    cloudprofiler: cloudprofiler.VERSIONS,
    cloudresourcemanager: cloudresourcemanager.VERSIONS,
    cloudshell: cloudshell.VERSIONS,
    cloudtasks: cloudtasks.VERSIONS,
    cloudtrace: cloudtrace.VERSIONS,
    composer: composer.VERSIONS,
    compute: compute.VERSIONS,
    container: container.VERSIONS,
    content: content.VERSIONS,
    customsearch: customsearch.VERSIONS,
    dataflow: dataflow.VERSIONS,
    dataproc: dataproc.VERSIONS,
    datastore: datastore.VERSIONS,
    deploymentmanager: deploymentmanager.VERSIONS,
    dfareporting: dfareporting.VERSIONS,
    dialogflow: dialogflow.VERSIONS,
    digitalassetlinks: digitalassetlinks.VERSIONS,
    discovery: discovery.VERSIONS,
    dlp: dlp.VERSIONS,
    dns: dns.VERSIONS,
    doubleclickbidmanager: doubleclickbidmanager.VERSIONS,
    doubleclicksearch: doubleclicksearch.VERSIONS,
    drive: drive.VERSIONS,
    file: file.VERSIONS,
    firebasedynamiclinks: firebasedynamiclinks.VERSIONS,
    firebaserules: firebaserules.VERSIONS,
    firestore: firestore.VERSIONS,
    fitness: fitness.VERSIONS,
    fusiontables: fusiontables.VERSIONS,
    games: games.VERSIONS,
    gamesConfiguration: gamesConfiguration.VERSIONS,
    gamesManagement: gamesManagement.VERSIONS,
    genomics: genomics.VERSIONS,
    gmail: gmail.VERSIONS,
    groupsmigration: groupsmigration.VERSIONS,
    groupssettings: groupssettings.VERSIONS,
    iam: iam.VERSIONS,
    iamcredentials: iamcredentials.VERSIONS,
    iap: iap.VERSIONS,
    identitytoolkit: identitytoolkit.VERSIONS,
    indexing: indexing.VERSIONS,
    jobs: jobs.VERSIONS,
    kgsearch: kgsearch.VERSIONS,
    language: language.VERSIONS,
    licensing: licensing.VERSIONS,
    logging: logging.VERSIONS,
    manufacturers: manufacturers.VERSIONS,
    mirror: mirror.VERSIONS,
    ml: ml.VERSIONS,
    monitoring: monitoring.VERSIONS,
    oauth2: oauth2.VERSIONS,
    oslogin: oslogin.VERSIONS,
    pagespeedonline: pagespeedonline.VERSIONS,
    partners: partners.VERSIONS,
    people: people.VERSIONS,
    playcustomapp: playcustomapp.VERSIONS,
    plus: plus.VERSIONS,
    plusDomains: plusDomains.VERSIONS,
    poly: poly.VERSIONS,
    proximitybeacon: proximitybeacon.VERSIONS,
    pubsub: pubsub.VERSIONS,
    redis: redis.VERSIONS,
    replicapool: replicapool.VERSIONS,
    replicapoolupdater: replicapoolupdater.VERSIONS,
    reseller: reseller.VERSIONS,
    runtimeconfig: runtimeconfig.VERSIONS,
    safebrowsing: safebrowsing.VERSIONS,
    script: script.VERSIONS,
    searchconsole: searchconsole.VERSIONS,
    servicebroker: servicebroker.VERSIONS,
    serviceconsumermanagement: serviceconsumermanagement.VERSIONS,
    servicecontrol: servicecontrol.VERSIONS,
    servicemanagement: servicemanagement.VERSIONS,
    serviceusage: serviceusage.VERSIONS,
    serviceuser: serviceuser.VERSIONS,
    sheets: sheets.VERSIONS,
    siteVerification: siteVerification.VERSIONS,
    slides: slides.VERSIONS,
    sourcerepo: sourcerepo.VERSIONS,
    spanner: spanner.VERSIONS,
    speech: speech.VERSIONS,
    sqladmin: sqladmin.VERSIONS,
    storage: storage.VERSIONS,
    storagetransfer: storagetransfer.VERSIONS,
    streetviewpublish: streetviewpublish.VERSIONS,
    surveys: surveys.VERSIONS,
    tagmanager: tagmanager.VERSIONS,
    tasks: tasks.VERSIONS,
    testing: testing.VERSIONS,
    texttospeech: texttospeech.VERSIONS,
    toolresults: toolresults.VERSIONS,
    tpu: tpu.VERSIONS,
    translate: translate.VERSIONS,
    urlshortener: urlshortener.VERSIONS,
    vault: vault.VERSIONS,
    videointelligence: videointelligence.VERSIONS,
    vision: vision.VERSIONS,
    webfonts: webfonts.VERSIONS,
    webmasters: webmasters.VERSIONS,
    websecurityscanner: websecurityscanner.VERSIONS,
    youtube: youtube.VERSIONS,
    youtubeAnalytics: youtubeAnalytics.VERSIONS,
    youtubereporting: youtubereporting.VERSIONS,
};
class GeneratedAPIs {
    constructor() {
        this.abusiveexperiencereport = abusiveexperiencereport.abusiveexperiencereport;
        this.acceleratedmobilepageurl = acceleratedmobilepageurl.acceleratedmobilepageurl;
        this.adexchangebuyer = adexchangebuyer.adexchangebuyer;
        this.adexchangebuyer2 = adexchangebuyer2.adexchangebuyer2;
        this.adexperiencereport = adexperiencereport.adexperiencereport;
        this.admin = admin.admin;
        this.adsense = adsense.adsense;
        this.adsensehost = adsensehost.adsensehost;
        this.analytics = analytics.analytics;
        this.analyticsreporting = analyticsreporting.analyticsreporting;
        this.androiddeviceprovisioning = androiddeviceprovisioning.androiddeviceprovisioning;
        this.androidenterprise = androidenterprise.androidenterprise;
        this.androidmanagement = androidmanagement.androidmanagement;
        this.androidpublisher = androidpublisher.androidpublisher;
        this.appengine = appengine.appengine;
        this.appsactivity = appsactivity.appsactivity;
        this.appstate = appstate.appstate;
        this.bigquery = bigquery.bigquery;
        this.bigquerydatatransfer = bigquerydatatransfer.bigquerydatatransfer;
        this.binaryauthorization = binaryauthorization.binaryauthorization;
        this.blogger = blogger.blogger;
        this.books = books.books;
        this.calendar = calendar.calendar;
        this.chat = chat.chat;
        this.civicinfo = civicinfo.civicinfo;
        this.classroom = classroom.classroom;
        this.cloudbilling = cloudbilling.cloudbilling;
        this.cloudbuild = cloudbuild.cloudbuild;
        this.clouddebugger = clouddebugger.clouddebugger;
        this.clouderrorreporting = clouderrorreporting.clouderrorreporting;
        this.cloudfunctions = cloudfunctions.cloudfunctions;
        this.cloudiot = cloudiot.cloudiot;
        this.cloudkms = cloudkms.cloudkms;
        this.cloudprofiler = cloudprofiler.cloudprofiler;
        this.cloudresourcemanager = cloudresourcemanager.cloudresourcemanager;
        this.cloudshell = cloudshell.cloudshell;
        this.cloudtasks = cloudtasks.cloudtasks;
        this.cloudtrace = cloudtrace.cloudtrace;
        this.composer = composer.composer;
        this.compute = compute.compute;
        this.container = container.container;
        this.content = content.content;
        this.customsearch = customsearch.customsearch;
        this.dataflow = dataflow.dataflow;
        this.dataproc = dataproc.dataproc;
        this.datastore = datastore.datastore;
        this.deploymentmanager = deploymentmanager.deploymentmanager;
        this.dfareporting = dfareporting.dfareporting;
        this.dialogflow = dialogflow.dialogflow;
        this.digitalassetlinks = digitalassetlinks.digitalassetlinks;
        this.discovery = discovery.discovery;
        this.dlp = dlp.dlp;
        this.dns = dns.dns;
        this.doubleclickbidmanager = doubleclickbidmanager.doubleclickbidmanager;
        this.doubleclicksearch = doubleclicksearch.doubleclicksearch;
        this.drive = drive.drive;
        this.file = file.file;
        this.firebasedynamiclinks = firebasedynamiclinks.firebasedynamiclinks;
        this.firebaserules = firebaserules.firebaserules;
        this.firestore = firestore.firestore;
        this.fitness = fitness.fitness;
        this.fusiontables = fusiontables.fusiontables;
        this.games = games.games;
        this.gamesConfiguration = gamesConfiguration.gamesConfiguration;
        this.gamesManagement = gamesManagement.gamesManagement;
        this.genomics = genomics.genomics;
        this.gmail = gmail.gmail;
        this.groupsmigration = groupsmigration.groupsmigration;
        this.groupssettings = groupssettings.groupssettings;
        this.iam = iam.iam;
        this.iamcredentials = iamcredentials.iamcredentials;
        this.iap = iap.iap;
        this.identitytoolkit = identitytoolkit.identitytoolkit;
        this.indexing = indexing.indexing;
        this.jobs = jobs.jobs;
        this.kgsearch = kgsearch.kgsearch;
        this.language = language.language;
        this.licensing = licensing.licensing;
        this.logging = logging.logging;
        this.manufacturers = manufacturers.manufacturers;
        this.mirror = mirror.mirror;
        this.ml = ml.ml;
        this.monitoring = monitoring.monitoring;
        this.oauth2 = oauth2.oauth2;
        this.oslogin = oslogin.oslogin;
        this.pagespeedonline = pagespeedonline.pagespeedonline;
        this.partners = partners.partners;
        this.people = people.people;
        this.playcustomapp = playcustomapp.playcustomapp;
        this.plus = plus.plus;
        this.plusDomains = plusDomains.plusDomains;
        this.poly = poly.poly;
        this.proximitybeacon = proximitybeacon.proximitybeacon;
        this.pubsub = pubsub.pubsub;
        this.redis = redis.redis;
        this.replicapool = replicapool.replicapool;
        this.replicapoolupdater = replicapoolupdater.replicapoolupdater;
        this.reseller = reseller.reseller;
        this.runtimeconfig = runtimeconfig.runtimeconfig;
        this.safebrowsing = safebrowsing.safebrowsing;
        this.script = script.script;
        this.searchconsole = searchconsole.searchconsole;
        this.servicebroker = servicebroker.servicebroker;
        this.serviceconsumermanagement = serviceconsumermanagement.serviceconsumermanagement;
        this.servicecontrol = servicecontrol.servicecontrol;
        this.servicemanagement = servicemanagement.servicemanagement;
        this.serviceusage = serviceusage.serviceusage;
        this.serviceuser = serviceuser.serviceuser;
        this.sheets = sheets.sheets;
        this.siteVerification = siteVerification.siteVerification;
        this.slides = slides.slides;
        this.sourcerepo = sourcerepo.sourcerepo;
        this.spanner = spanner.spanner;
        this.speech = speech.speech;
        this.sqladmin = sqladmin.sqladmin;
        this.storage = storage.storage;
        this.storagetransfer = storagetransfer.storagetransfer;
        this.streetviewpublish = streetviewpublish.streetviewpublish;
        this.surveys = surveys.surveys;
        this.tagmanager = tagmanager.tagmanager;
        this.tasks = tasks.tasks;
        this.testing = testing.testing;
        this.texttospeech = texttospeech.texttospeech;
        this.toolresults = toolresults.toolresults;
        this.tpu = tpu.tpu;
        this.translate = translate.translate;
        this.urlshortener = urlshortener.urlshortener;
        this.vault = vault.vault;
        this.videointelligence = videointelligence.videointelligence;
        this.vision = vision.vision;
        this.webfonts = webfonts.webfonts;
        this.webmasters = webmasters.webmasters;
        this.websecurityscanner = websecurityscanner.websecurityscanner;
        this.youtube = youtube.youtube;
        this.youtubeAnalytics = youtubeAnalytics.youtubeAnalytics;
        this.youtubereporting = youtubereporting.youtubereporting;
        this.abusiveexperiencereport = this.abusiveexperiencereport.bind(this);
        this.acceleratedmobilepageurl = this.acceleratedmobilepageurl.bind(this);
        this.adexchangebuyer = this.adexchangebuyer.bind(this);
        this.adexchangebuyer2 = this.adexchangebuyer2.bind(this);
        this.adexperiencereport = this.adexperiencereport.bind(this);
        this.admin = this.admin.bind(this);
        this.adsense = this.adsense.bind(this);
        this.adsensehost = this.adsensehost.bind(this);
        this.analytics = this.analytics.bind(this);
        this.analyticsreporting = this.analyticsreporting.bind(this);
        this.androiddeviceprovisioning = this.androiddeviceprovisioning.bind(this);
        this.androidenterprise = this.androidenterprise.bind(this);
        this.androidmanagement = this.androidmanagement.bind(this);
        this.androidpublisher = this.androidpublisher.bind(this);
        this.appengine = this.appengine.bind(this);
        this.appsactivity = this.appsactivity.bind(this);
        this.appstate = this.appstate.bind(this);
        this.bigquery = this.bigquery.bind(this);
        this.bigquerydatatransfer = this.bigquerydatatransfer.bind(this);
        this.binaryauthorization = this.binaryauthorization.bind(this);
        this.blogger = this.blogger.bind(this);
        this.books = this.books.bind(this);
        this.calendar = this.calendar.bind(this);
        this.chat = this.chat.bind(this);
        this.civicinfo = this.civicinfo.bind(this);
        this.classroom = this.classroom.bind(this);
        this.cloudbilling = this.cloudbilling.bind(this);
        this.cloudbuild = this.cloudbuild.bind(this);
        this.clouddebugger = this.clouddebugger.bind(this);
        this.clouderrorreporting = this.clouderrorreporting.bind(this);
        this.cloudfunctions = this.cloudfunctions.bind(this);
        this.cloudiot = this.cloudiot.bind(this);
        this.cloudkms = this.cloudkms.bind(this);
        this.cloudprofiler = this.cloudprofiler.bind(this);
        this.cloudresourcemanager = this.cloudresourcemanager.bind(this);
        this.cloudshell = this.cloudshell.bind(this);
        this.cloudtasks = this.cloudtasks.bind(this);
        this.cloudtrace = this.cloudtrace.bind(this);
        this.composer = this.composer.bind(this);
        this.compute = this.compute.bind(this);
        this.container = this.container.bind(this);
        this.content = this.content.bind(this);
        this.customsearch = this.customsearch.bind(this);
        this.dataflow = this.dataflow.bind(this);
        this.dataproc = this.dataproc.bind(this);
        this.datastore = this.datastore.bind(this);
        this.deploymentmanager = this.deploymentmanager.bind(this);
        this.dfareporting = this.dfareporting.bind(this);
        this.dialogflow = this.dialogflow.bind(this);
        this.digitalassetlinks = this.digitalassetlinks.bind(this);
        this.discovery = this.discovery.bind(this);
        this.dlp = this.dlp.bind(this);
        this.dns = this.dns.bind(this);
        this.doubleclickbidmanager = this.doubleclickbidmanager.bind(this);
        this.doubleclicksearch = this.doubleclicksearch.bind(this);
        this.drive = this.drive.bind(this);
        this.file = this.file.bind(this);
        this.firebasedynamiclinks = this.firebasedynamiclinks.bind(this);
        this.firebaserules = this.firebaserules.bind(this);
        this.firestore = this.firestore.bind(this);
        this.fitness = this.fitness.bind(this);
        this.fusiontables = this.fusiontables.bind(this);
        this.games = this.games.bind(this);
        this.gamesConfiguration = this.gamesConfiguration.bind(this);
        this.gamesManagement = this.gamesManagement.bind(this);
        this.genomics = this.genomics.bind(this);
        this.gmail = this.gmail.bind(this);
        this.groupsmigration = this.groupsmigration.bind(this);
        this.groupssettings = this.groupssettings.bind(this);
        this.iam = this.iam.bind(this);
        this.iamcredentials = this.iamcredentials.bind(this);
        this.iap = this.iap.bind(this);
        this.identitytoolkit = this.identitytoolkit.bind(this);
        this.indexing = this.indexing.bind(this);
        this.jobs = this.jobs.bind(this);
        this.kgsearch = this.kgsearch.bind(this);
        this.language = this.language.bind(this);
        this.licensing = this.licensing.bind(this);
        this.logging = this.logging.bind(this);
        this.manufacturers = this.manufacturers.bind(this);
        this.mirror = this.mirror.bind(this);
        this.ml = this.ml.bind(this);
        this.monitoring = this.monitoring.bind(this);
        this.oauth2 = this.oauth2.bind(this);
        this.oslogin = this.oslogin.bind(this);
        this.pagespeedonline = this.pagespeedonline.bind(this);
        this.partners = this.partners.bind(this);
        this.people = this.people.bind(this);
        this.playcustomapp = this.playcustomapp.bind(this);
        this.plus = this.plus.bind(this);
        this.plusDomains = this.plusDomains.bind(this);
        this.poly = this.poly.bind(this);
        this.proximitybeacon = this.proximitybeacon.bind(this);
        this.pubsub = this.pubsub.bind(this);
        this.redis = this.redis.bind(this);
        this.replicapool = this.replicapool.bind(this);
        this.replicapoolupdater = this.replicapoolupdater.bind(this);
        this.reseller = this.reseller.bind(this);
        this.runtimeconfig = this.runtimeconfig.bind(this);
        this.safebrowsing = this.safebrowsing.bind(this);
        this.script = this.script.bind(this);
        this.searchconsole = this.searchconsole.bind(this);
        this.servicebroker = this.servicebroker.bind(this);
        this.serviceconsumermanagement = this.serviceconsumermanagement.bind(this);
        this.servicecontrol = this.servicecontrol.bind(this);
        this.servicemanagement = this.servicemanagement.bind(this);
        this.serviceusage = this.serviceusage.bind(this);
        this.serviceuser = this.serviceuser.bind(this);
        this.sheets = this.sheets.bind(this);
        this.siteVerification = this.siteVerification.bind(this);
        this.slides = this.slides.bind(this);
        this.sourcerepo = this.sourcerepo.bind(this);
        this.spanner = this.spanner.bind(this);
        this.speech = this.speech.bind(this);
        this.sqladmin = this.sqladmin.bind(this);
        this.storage = this.storage.bind(this);
        this.storagetransfer = this.storagetransfer.bind(this);
        this.streetviewpublish = this.streetviewpublish.bind(this);
        this.surveys = this.surveys.bind(this);
        this.tagmanager = this.tagmanager.bind(this);
        this.tasks = this.tasks.bind(this);
        this.testing = this.testing.bind(this);
        this.texttospeech = this.texttospeech.bind(this);
        this.toolresults = this.toolresults.bind(this);
        this.tpu = this.tpu.bind(this);
        this.translate = this.translate.bind(this);
        this.urlshortener = this.urlshortener.bind(this);
        this.vault = this.vault.bind(this);
        this.videointelligence = this.videointelligence.bind(this);
        this.vision = this.vision.bind(this);
        this.webfonts = this.webfonts.bind(this);
        this.webmasters = this.webmasters.bind(this);
        this.websecurityscanner = this.websecurityscanner.bind(this);
        this.youtube = this.youtube.bind(this);
        this.youtubeAnalytics = this.youtubeAnalytics.bind(this);
        this.youtubereporting = this.youtubereporting.bind(this);
    }
}
exports.GeneratedAPIs = GeneratedAPIs;
//# sourceMappingURL=index.js.map