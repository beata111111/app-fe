import {Injectable} from "@angular/core";
import {Word} from "@model";

@Injectable({
  providedIn: 'root',
})
export class VoiceWorkerService {
  private _url_template1 = 'https://texttospeech.responsivevoice.org/v1/text:synthesize?text=';
  private _url_template2 = '&lang=pl&engine=g1&name=&pitch=0.5&rate=0.5&volume=1&key=Q4jAKASl&gender=male';
  private _broadcastChannel = new BroadcastChannel('PREFETCH_VOICE_CHANNEL');

  constructor() {
  }

  private _generateUrl (text: string) {
    const URIEncoded = encodeURI(text);
    return `${this._url_template1}${URIEncoded}${this._url_template2}`;
  }

  prefetchWordsVoice (words: Word[]) {
    const urls = words.map(word => this._generateUrl(word.nounPL));

    this._broadcastChannel.postMessage({
      type: 'PREFETCH_VOICE',
      urls
    });
  }
}
