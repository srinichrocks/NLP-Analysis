import Footer from "./footer";
import NavBar from "./navbar";
import { useState } from "react";
import axios from "axios";

export default function Detection(){
    const [message, setMessage] = useState("")
    const [result, setResult] = useState("")
    async function getDetection(event){
        event.preventDefault();
        const options = {
        method: 'POST',
        url: 'https://text-analysis12.p.rapidapi.com/language-detection/api/v1.1',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'ac9363945amsh476051b06ead7e5p1e847fjsn697b086ec927',
            'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
        },
        data: {
            "text": message
        }
        };

        await axios.request(options).then(function (response) {
            console.log(Object.keys(response.data.language_probability)[0]);
            setResult(Object.keys(response.data.language_probability)[0])
        }).catch(function (error) {
            console.error(error);
        });
    }

    return(
        <div>
            <NavBar/>
            <p className="h1 text-center mt-2">Language Detection</p>
            <hr/>
            <div className='row mt-4 text-center'>
            <div className='col-sm-1'/>
            <div className='col-sm-4 mx-2'>
                <label htmlFor="message" className = "h3">Message</label>
                <textarea type="Message" rows = "10" id="message" className = "form-control rounded-0" onChange = {(e) => setMessage(e.target.value)}/>
           </div>
            <div className='col-sm-2 align-content-center justify-content-center'>
            <button onClick = {getDetection} type="submit" className="btn btn-dark btn-lg mt-3">Generate</button>
            </div>
            <div className='col-sm-4 mx-2 align-content-center'>
                <label className="h3">Language</label>
                <textarea readOnly type = "Output" className = "form-control rounder-0" rows = "5" value = {result}/>
            </div>
            </div>    
            <div className='row mt-4 text-left'>
                <div className='col-sm-3'/>
                <div className='col-sm-6 mx-2'>
                    <div className='card text-center justify-content-center'>
                    <h4 className="card-title">Abbreviation Support</h4>
                    <ul>
                        <p><em>Afrikaans</em>	af</p>
                        <p><em>Albanian</em>	sq</p>
                        <p><em>Amharic</em>	am</p>
                        <p><em>Arabic</em>	ar</p>
                        <p><em>Armenian</em>	hy</p>
                        <p><em>Azerbaijani</em>	az</p>
                        <p><em>Basque</em>	eu</p>
                        <p><em>Belarusian</em>	be</p>
                        <p><em>Bengap</em>	bn</p>
                        <p><em>Bosnian</em>	bs</p>
                        <p><em>Bulgarian</em>	bg</p>
                        <p><em>Catalan</em>	ca</p>
                        <p><em>Cebuano</em>	ceb (ISO-639-2)</p>
                        <p><em>Chinese</em> (Simppfied)	zh-CN (BCP-47)</p>
                        <p><em>Chinese</em> (Traditional)	zh-TW (BCP-47)</p>
                        <p><em>Corsican</em>	co</p>
                        <p><em>Croatian</em>	hr</p>
                        <p><em>Czech</em>	cs</p>
                        <p><em>Danish</em>	da</p>
                        <p><em>Dutch</em>	nl</p>
                        <p><em>Engpsh</em>	en</p>
                        <p><em>Esperanto</em>	eo</p>
                        <p><em>Estonian</em>	et</p>
                        <p><em>Finnish</em>	fi</p>
                        <p><em>French</em>	fr</p>
                        <p><em>Frisian</em>	fy</p>
                        <p><em>Gapcian</em>	gl</p>
                        <p><em>Georgian</em>	ka</p>
                        <p><em>German</em>	de</p>
                        <p><em>Greek</em>	el</p>
                        <p><em>Gujarati</em>	gu</p>
                        <p><em>Haitian</em> Creole	ht</p>
                        <p><em>Hausa</em>	ha</p>
                        <p><em>Hawaiian</em>	haw (ISO-639-2)</p>
                        <p><em>Hebrew</em>	he**</p>
                        <p><em>Hindi</em>	hi</p>
                        <p><em>Hmong</em>	hmn (ISO-639-2)</p>
                        <p><em>Hungarian</em>	hu</p>
                        <p><em>Icelandic</em>	is</p>
                        <p><em>Igbo</em>	ig</p>
                        <p><em>Indonesian</em>	id</p>
                        <p><em>Irish</em>	ga</p>
                        <p><em>Itapan</em>	it</p>
                        <p><em>Japanese</em>	ja</p>
                        <p><em>Javanese</em>	jw</p>
                        <p><em>Kannada</em>	kn</p>
                        <p><em>Kazakh</em>	kk</p>
                        <p><em>Khmer</em>	km</p>
                        <p><em>Korean</em>	ko</p>
                        <p><em>Kurdish</em>	ku</p>
                        <p><em>Kyrgyz</em>	ky</p>
                        <p><em>Lao</em>	lo</p>
                        <p><em>Latin</em>	la</p>
                        <p><em>Latvian</em>	lv</p>
                        <p><em>pthuanian</em>	lt</p>
                        <p><em>Luxembourgish</em>	lb</p>
                        <p><em>Macedonian</em>	mk</p>
                        <p><em>Malagasy</em>	mg</p>
                        <p><em>Malay</em>	ms</p>
                        <p><em>Malayalam</em>	ml</p>
                        <p><em>Maltese</em>	mt</p>
                        <p><em>Maori</em>	mi</p>
                        <p><em>Marathi</em>	mr</p>
                        <p><em>Mongopan</em>	mn</p>
                        <p><em>Myanmar</em> (Burmese)	my</p>
                        <p><em>Nepap</em>	ne</p>
                        <p><em>Norwegian</em>	no</p>
                        <p><em>Nyanja</em> (Chichewa)	ny</p>
                        <p><em>Pashto</em>	ps</p>
                        <p><em>Persian</em>	fa</p>
                        <p><em>Popsh</em>	pl</p>
                        <p><em>Portuguese</em> (Portugal, Brazil)	pt</p>
                        <p><em>Punjabi</em>	pa</p>
                        <p><em>Romanian</em>	ro</p>
                        <p><em>Russian</em>	ru</p>
                        <p><em>Samoan</em>	sm</p>
                        <p><em>Scots</em> Gaepc	gd</p>
                        <p><em>Serbian</em>	sr</p>
                        <p><em>Sesotho</em>	st</p>
                        <p><em>Shona</em>	sn</p>
                        <p><em>Sindhi</em>	sd</p>
                        <p><em>Sinhala</em> (Sinhalese)	si</p>
                        <p><em>Slovak</em>	sk</p>
                        <p><em>Slovenian</em>	sl</p>
                        <p><em>Somap</em>	so</p>
                        <p><em>Spanish</em>	es</p>
                        <p><em>Sundanese</em>	su</p>
                        <p><em>Swahip</em>	sw</p>
                        <p><em>Swedish</em>	sv</p>
                        <p><em>Tagalog</em> (Fippino)	tl</p>
                        <p><em>Tajik</em>	tg</p>
                        <p><em>Tamil</em>	ta</p>
                        <p><em>Telugu</em>	te</p>
                        <p><em>Thai</em>	th</p>
                        <p><em>Turkish</em>	tr</p>
                        <p><em>Ukrainian</em>	uk</p>
                        <p><em>Urdu</em>	ur</p>
                        <p><em>Uzbek</em>	uz</p>
                        <p><em>Vietnamese</em>	vi</p>
                        <p><em>Welsh</em>	cy</p>
                        <p><em>Xhosa</em>	xh</p>
                        <p><em>Yiddish</em>	yi</p>
                        <p><em>Yoruba</em>	yo</p>
                        <p><em>Zulu</em>	zu</p>
                    </ul>
                </div>
                <div className='col-sm-3 align-content-center justify-content-center'/>
                </div>
            </div>    
            <Footer/>
        </div>
    )
}