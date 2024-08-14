import Image from 'next/image'
import Styles from './page.css'
import Link from 'next/link'
export default function LoginPage(){
    return(
        <div>
            <div class="topnav">
              <h1 className="head">FarmersHelp</h1>
              <div>
                <Link href="/home">Home</Link>
                <Link href="/aboutus">About us</Link>
                <Link href="/organizations" className="active">Organizations</Link>   
                <Link href="/schemes">Schemes</Link>   
                <Link href="/solutions">Solution</Link>         
              </div>
            </div>
            <div class="card-container">                
                <div class="cards">
                    <Image src="/UVS.jpg" alt="" width={100} height={100} />
                    <div class="card-text">
                        <p>
                            <strong>Universal Versatile Society (UVS)</strong><br/><br />
                            The NGO is into several critical areas such as agriculture, environment, rural development, education, and women empowerment. Its mission is to serve the communities by connecting the donors with community-based projects and use its expertise to promote sustainable development projects.The efforts of UVS are directed towards preventing farmer suicides by providing basic education, raising awareness, imparting employable skills, infrastructure development and small enterprise development, leading to income generation and employment opportunities in a sustainable way. To support Universal Versatile Society, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
                <div class="cards">
                    <Image src="/Gramya-Resource-Center-for-Women.jpg" alt="" width={100} height={100}/>
                    <div class="card-text">
                        <p>
                            <strong>Gramya Resource Center for Women</strong><br/><br />
                            Founded in 1993 to promote women&apos;s rights, Gramya&apos;s vision is to create a just society with equal opportunities for women, especially tribals and Dalits. In the rural areas, Gramya works for the well-being and rights of the farming community, by addressing the crisis of farmer suicides and assisting victims' families. Their collective efforts are helping thousands of distressed farmer families.Gramya also promotes child rights with a focus on the girl child and education, and works closely with community-based organisations to seek justice for marginalised communities. To support Gramya Resource Center for Women, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
                <div class="cards">
                    <Image src="/ds.jpg" alt="" width={100} height={100}/>
                    <div class="card-text">
                        <p>
                        <strong>Professional Assistance for Development Action (PRADAN)</strong><br/><br />
                        Founded in 1983, PRADAN works in the area of rural poverty alleviation by promoting sustainable livelihoods in rural pockets, particularly among tribal and vulnerable groups. Its efforts are focussed on long term collaboration with the government and donors to alleviate rural poverty. PRADAN also trains and places well-educated people with empathy at the grassroots level to support and engage women-run collectives. As of 2020, PRADAN worked with over 862,300 families belonging to the most vulnerable groups such as Dalits and tribals in over 8,600 villages across seven states. To support PRADAN, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
                <div class="cards">
                    <Image src="/End-Poverty.jpg" alt="" width={100} height={100}/>
                    <div class="card-text">
                        <p>
                            <strong>End Poverty</strong><br/><br />
                            End Poverty was started in 2009 with the purpose of poverty reduction in India through sustainable livelihood creation, girls education, rural development and civil society development. The nonprofit has been working in the states of Rajasthan, Haryana, Karnataka, Madhya Pradesh and Delhi. Its main beneficiaries are poor, landless agricultural Indian farmers, small and marginal farmers, traditional artisans, poor women, uneducated girl children, unemployed youth, etc. It provides capacity building and training to support diverse groups. End Poverty develops and delivers innovative and self-sustaining programmes for social impact. It has carried out development works of over ₹60 crore in the last three years benefitting nearly 24,000 people. To support End Poverty, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
                <div class="cards">
                    <Image src="/Swades-Foundation.jpg" alt="" width={100} height={100}/>
                    <div class="card-text">
                        <p>
                            <strong>Swades Foundation</strong><br/><br />
                            Founded by Ronnie and Zarina Screwvala, Swades Foundation operates with the aim of empowering rural India by incorporating innovative practices and the use of modern technology. Swades aims to empower one million rural Indians every 5-6 years through holistic development with a focus on health, education, water and sanitation, and economic development. The organisation connects rural communities with corporates, young urban India, not-for-profit organisations and governments, enabling marginalised communities to improve their lives.  Their 1,600 member strong team includes 1,300 community volunteers and 300 full-time staff of specialists and professionals working at the grassroots level. To support Swades Foundation, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
                <div class="cards">
                    <Image src="/MANAVLOK.jpg" alt="" width={100} height={100}/>
                    <div class="card-text">
                        <p>
                            <strong>Marathwada Navnirman Lokayat (MANAVLOK)</strong><br/><br />
                            Established in 1982, MANAVLOK is a voluntary organisation dedicated to the socio-economic upliftment of the rural poor. Headquartered at Ambajogai, in Maharashtra&apos;s Beed district, it operates through seven sub-centres in Beed, Latur and Osmanabad districts. MANAVLOK aims to achieve equality in the lives of women, landless labourers, and the farming community. Its endeavours comprise community-based monitoring programmes, watershed development programme, Trupti Kitchen for senior citizens, Krushak Panchayat, free legal aid centre and others. MANAVLOK also works in the areas of sanitation, provides relief services for the victims of natural disasters and monitors and evaluates government schemes and programmes. To support MANAVLOK, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
                <div class="cards">
                    <Image src="/WOTR.jpg" alt="" width={100} height={100}/>
                    <div class="card-text">
                        <p>
                            <strong>Watershed Organisation Trust (WOTR)</strong><br/><br />
                            WOTR is a well-established organisation in Maharashtra and is engaged in comprehensive rural development initiatives. It focuses on agriculture, allied sector development, climate change adaptation, watershed, natural resource management, social development, training, and capacity building. WOTR is dedicated to transforming the lives of millions of poor villagers across India through participatory watershed development, ecosystem restoration, and climate-resilient, sustainable agriculture. Its special emphasis is on building vulnerable communities, farmers, and women. WOTR was awarded the prestigious Land for Life Award 2017 instituted by the United Nations Convention to Combat Desertification (UNCCD) for achieving Sustainable Development Goals (SDGs). To support Watershed Organisation, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
                <div class="cards">
                    <Image src="/Vrutti.jpg" alt="" width={100} height={100}/>
                    <div class="card-text">
                        <p>
                            <strong>Vrutti</strong><br/><br />
                            Active for over 23 years, Vrutti has significantly improved the lives and livelihoods of over one million poor and marginalised individuals and households. Vrutti&apos;s efforts are directed towards improving people&apos;s well-being through knowledge, innovation and transformative actions. It adopts an ecosystem approach to integrate and deliver end-to-end services that empower small producers to become profitable and escape poverty. Vrutti&apos;s flagship model of &apos;3Fold&apos; covers over 40,000 smallholder Indian farmers,  enabling them to access multiple services (farm, financing, market, institutions) and become independent and resilient. Its portfolio also includes similar models for women-owned businesses, marine fisherfolk, Micro, Small and Medium Enterprises (MSMEs) and people in special circumstances like sex workers and transgender persons. To support Vrutti, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
                <div class="cards">
                    <Image src="/pradan.jpg" alt="" width={100} height={100}/>
                    <div class="card-text">
                        <p>
                            <strong>Dilasa Sanstha</strong><br/><br />
                            Established in 1994, Dilasa Sanstha works in close cooperation with several smaller NGOs in Maharashtra&apos;s Vidarbha and Marathwada regions. It advocates innovative and sustainable irrigation methods to support agricultural development for tribal people and small Indian farmers. The low-cost technical solutions provided by Dilasa help the farmers improve irrigation methods and practice mixed cropping. Dilasa has also created 7,650 self-help groups (SHGs) for women to encourage organic farming. The organisation also runs a farmers support centre to inform them about various government schemes. So far, over 125,000 people have directly reaped the benefits from its programmes and over 100,000 others have been positively affected. To support Dilasa Sanstha, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
                <div class="cards">
                    <Image src="/SeSTA.jpg" alt="" width={100} height={100}/>
                    <div class="card-text">
                        <p>
                            <strong>Seven Sisters Development Assistance (SeSTA)</strong><br/><br />
                            SeSTA literally means ‘effort’ in Assamese and since its inception in 2011, the organisation has been working towards creating an equitable society in Northeast India. It works directly with 8,000 families in 100 villages across four districts of Assam: Chirang, Bongaigaon, Goalpara and Kamrup. So far, it has helped over 8,600 small and marginal farmers improve the productivity of crops like paddy and maize. SeSTA is planning to expand its works to other parts of Assam and the Northeast, hoping to reach over 30,000 rural poor families in the next three years. To support Seven Sisters Development Assistance, you can donate here.
                            <button class="donate">Donate now!</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
