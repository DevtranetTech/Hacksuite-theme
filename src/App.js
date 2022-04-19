import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import configValue from "./config";

export default function App() {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleDarkTheme = () => setDarkTheme(!darkTheme);

    return (
        <div className={`${darkTheme ? "dark" : ""}`}>
            <Helmet
                meta={[
                    {
                        name: "theme-color",
                        content: darkTheme ? "#202020" : "#ffffff"
                    }
                ]}
            />
            <div className="dark:bg-dark">
                <div className="flex flex-col sm:gap-1.5 md:gap-1.5 md:gap-10">
                    <header className="px-1 pt-1 pb-6 md:p-16 rounded-br-[43.2458px] md:rounded-br-[145.5px] relative text-white text-center">
                        <h1
                            className="md:absolute cursor-pointer md:rotate-[-25deg] top-3 right-5 subheadline md:headline"
                            onClick={toggleDarkTheme}>
                            {!darkTheme && (
                                <svg
                                    className="float-right"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    width="1em"
                                    height="1em"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 36 36">
                                    <path
                                        fill="currentColor"
                                        d="M31 27.19a1 1 0 0 0-1-.56h-.85a11 11 0 0 1-4.23-21.02a1 1 0 0 0 .61-1a1 1 0 0 0-.67-.91a14.7 14.7 0 0 0-5-.87a15.12 15.12 0 0 0 0 30.24a14.78 14.78 0 0 0 11-4.81a1 1 0 0 0 .14-1.07Zm-11.11 3.93a13.12 13.12 0 0 1 0-26.24a11.81 11.81 0 0 1 2 .16a13 13 0 0 0 5.72 23.53a12.75 12.75 0 0 1-7.72 2.55Z"
                                    />
                                    <path fill="none" d="M0 0h36v36H0z" />
                                </svg>
                            )}
                            {darkTheme && (
                                <svg
                                    className="float-right"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    width="1em"
                                    height="1em"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007s-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414l2.121-2.121l1.414 1.414zM16.242 6.344l2.122-2.122l1.414 1.414l-2.122 2.122zM6.344 7.759L4.223 5.637l1.415-1.414l2.12 2.122zm13.434 10.605l-1.414 1.414l-2.122-2.122l1.414-1.414z"
                                    />
                                </svg>
                            )}
                        </h1>
                        <h1 className="clear-both font-bold text-30px md:text-66px">
                            The Dynamics Theme
                        </h1>
                    </header>

                    <section>
                        {/* Containers */}
                        <div className="container-regular">
                            <h1 className="heading">Containers</h1>
                        </div>
                        <div className="border-2 border-dashed border-[#282828] dark:border-white my-5 container-regular">
                            <p className="text-24px">Regular size</p>
                        </div>
                        <div className="border-2 border-dashed border-[#282828] dark:border-white my-5 container-screen">
                            <p className="text-24px">Screen size</p>
                        </div>
                        <div className="border-2 border-dashed border-[#282828] dark:border-white my-5 container-medium">
                            <p className="text-24px">Medium size</p>
                        </div>
                        <div className="border-2 border-dashed border-[#282828] dark:border-white my-5 container-small">
                            <p className="text-24px">Small size</p>
                        </div>
                    </section>

                    <section className="container-regular">
                        {/* Typography */}
                        <h1 className="heading mb-5">Text</h1>
                        <div
                            className="container-gray-dark lg:grid grid-cols-2 rounded gap-2 shadow"
                            id="typography">
                            <div className="p-9 md:p-10 pb-3 md:pb-0 lg:pb-10">
                                <h1 className="heading">Heading</h1>
                                <h1 className="ultratitle">Ultratitle</h1>
                                <h1 className="title">Title</h1>
                                <h1 className="subtitle">Subtitle</h1>
                                <h1 className="headline">Headline</h1>
                                <h1 className="subheadline">Subheadline</h1>
                                <h1 className="eyebrow">Eyebrow</h1>
                                <h1 className="lead">Lead</h1>
                                <h1 className="caption">Caption</h1>
                            </div>
                            <div className="p-9 md:p-10 pt-0 lg:pt-10">
                                <h1 className="heading">Font</h1>
                                <h1 className="text-60px md:text-66px leading-[60px]">
                                    Myriad Pro
                                </h1>
                            </div>
                        </div>
                    </section>

                    <section className="container-regular">
                        {/* Primary buttons */}
                        <h1 className="heading mb-5">Primary buttons</h1>
                        <div className="md:grid grid-cols-3 items-center">
                            <div>
                                <button className="button-big button-deep-sky-blue">
                                    Big button
                                </button>
                            </div>
                            <div>
                                <button className="button-medium button-deep-sky-blue">
                                    Medium button
                                </button>
                            </div>
                            <div>
                                <button className="button-small button-deep-sky-blue">
                                    Small button
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="container-regular">
                        {/* Other buttons */}
                        <h1 className="heading mb-5">Other buttons</h1>
                        <div className="md:grid grid-cols-3 gap-y-5 items-center">
                            <div>
                                <button className="outline-button-big button-deep-sky-blue">
                                    Big outline button
                                </button>
                            </div>
                            <div>
                                <button className="outline-button-medium button-deep-sky-blue">
                                    Medium outline button
                                </button>
                            </div>
                            <div>
                                <button className="outline-button-small button-deep-sky-blue">
                                    Small outline button
                                </button>
                            </div>
                            <div>
                                <button className="cta-button-big">Big cta button</button>
                            </div>
                            <div>
                                <button className="cta-button-medium">Medium cta btn</button>
                            </div>
                            <div>
                                <button className="cta-button-small">Small cta btn</button>
                            </div>
                            <div>
                                <button className="cta-button-big">
                                    <span className="mr-5">Big arrow btn</span>
                                    <svg
                                        width="78"
                                        height="25"
                                        viewBox="0 0 78 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M53.9478 24.875V17H-3.2522V8H53.9478V0.125L77.0478 12.5L53.9478 24.875Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button className="cta-button-medium">
                                    <span className="mr-3">Medium arrow btn</span>
                                    <svg
                                        width="41"
                                        height="16"
                                        viewBox="0 0 41 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M28.2 15.7001V10.8H-1.70001V5.20005H28.2V0.300049L40.275 8.00005L28.2 15.7001Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button className="cta-button-small">
                                    <span className="mr-2">Small arrow btn</span>
                                    <svg
                                        width="26"
                                        height="13"
                                        viewBox="0 0 26 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.2008 12.6523V8.88941H-0.538269V4.58902H18.2008V0.826172L25.7686 6.73922L18.2008 12.6523Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="container-regular">
                        {/* Cards */}
                        <h1 className="heading mb-5">Cards</h1>
                        <div className="container-gray-dark md:grid grid-cols-2 rounded gap-2 shadow">
                            <div className="p-9 md:p-10 pb-3 md:pb-10">
                                <div className="card-primary">
                                    <h1 className="text-24px md:text-42px">Primary</h1>
                                </div>
                                <div className="card-sunken">
                                    <h1 className="text-24px md:text-42px">Sunken</h1>
                                </div>
                                <div className="card-interactive">
                                    <h1 className="text-24px md:text-42px">Interactive</h1>
                                </div>
                                <div className="card-gradient-text">
                                    <h1 className="text-24px md:text-42px">Gradient text</h1>
                                </div>
                                <div className="card-gradient">
                                    <h1 className="text-24px md:text-42px">Gradient BG</h1>
                                </div>
                            </div>
                            <div className="p-9 md:p-10 pt-0 md:pt-10">
                                <div className="card-translucent">
                                    <h1 className="text-24px md:text-42px">Translucent</h1>
                                </div>
                                <div className="card-translucent-dark">
                                    <h1 className="break-all text-24px md:text-42px">
                                        TranslucentDark
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container-regular">
                        {/* Forms */}
                        <h1 className="heading mb-5">Forms</h1>
                        <form>
                            <div className="md:grid grid-cols-2 gap-20 mb-5">
                                <div className="flex flex-col gap-5 mb-5 md:mb-0">
                                    <div>
                                        <h1 className="text-30px">Full name</h1>
                                        <input
                                            className="form-input"
                                            placeholder="Sample name"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-checkbox">
                                        <input id="checkbox" type="checkbox" />
                                        <label for="checkbox">Checkbox</label>
                                    </div>
                                    <div>
                                        <h1 className="text-30px">Expandable form</h1>
                                        <textarea
                                            className="form-input"
                                            placeholder="Sample text is like in two or three sentences"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <h1 className="text-30px">Drop down list</h1>
                                        <select className="form-select">
                                            <option>Fruit</option>
                                            <option>Vegetables</option>
                                            <option>Ice cream</option>
                                            <option>None of the above</option>
                                        </select>
                                    </div>
                                    <div className="form-radio">
                                        <input id="radio" type="radio" />
                                        <label for="radio">Radio</label>
                                    </div>
                                    <div>
                                        <h1 className="text-30px">Slider bar</h1>
                                        <input
                                            className="form-range"
                                            min="0"
                                            max="100"
                                            type="range"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="form-button" type="submit">
                                Submit
                            </button>
                        </form>
                    </section>

                    <section className="container-regular">
                        {/* Colors */}
                        <h1 className="heading mb-5">Colors</h1>
                        <div className="px-5 lg:px-20">
                            <h1 className="heading mb-5">Primary Colors</h1>
                            <div className="md:grid grid-cols-3 gap-5 mb-10">
                                <div className="min-h-[120px] mb-2 md:mb-0 bg-deep-sky-blue font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                                    <h1>Deep Sky Blue</h1>
                                    <h1>#03A9F4</h1>
                                </div>
                                <div className="min-h-[120px] mb-2 md:mb-0 bg-fruit-salad font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                                    <h1>Fruit Salad</h1>
                                    <h1>#4CAF50</h1>
                                </div>
                                <div className="min-h-[120px] mb-2 md:mb-0 bg-orange-peel font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                                    <h1>Orange Peel</h1>
                                    <h1>#FF9800</h1>
                                </div>
                            </div>
                            <h1 className="heading mb-5">Other Notable Colors</h1>
                            <div className="md:grid grid-cols-3 gap-5">
                                <div className="min-h-[120px] mb-2 md:mb-0 bg-link font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                                    <h1>For links</h1>
                                    <h1>#3B4FE4</h1>
                                </div>
                                <div className="min-h-[120px] mb-2 md:mb-0 bg-heading font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                                    <h1>For headings</h1>
                                    <h1>#1A1A1A</h1>
                                </div>
                                <div className="min-h-[120px] mb-2 md:mb-0 bg-body font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                                    <h1>For body text</h1>
                                    <h1>#6E7180</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container-regular">
                        {/* Sample paragraph */}
                        <h1 className="heading mb-5">Sample paragraph text</h1>
                        <div className="container-gray-dark rounded p-5 md:p-10 shadow">
                            <p className="mb-2">
                                This is a whole paragraph of text, include{" "}
                                <code>code like this</code>, as well as{" "}
                                <code>
                                    <a href="https://theme.thedynamics.tech">linked code</a>
                                </code>{" "}
                                & <a href="https://theme.thedynamics.tech">regular links</a>. The
                                paragraph ended up being 1 sentence, but now I guess it’s <b>two</b>
                                .
                            </p>
                            <pre>Here's a code block! No highlighting to be found.</pre>
                        </div>
                    </section>

                    <section className="container-regular">
                        {/* Badges */}
                        <h1 className="heading mb-5">Badges</h1>
                        <div className="pill-badge">Pill</div>
                        <div className="outline-badge">Outline</div>
                    </section>

                    <section className="container-regular" id="font-sizes">
                        {/* Font sizes */}
                        <h1 className="heading mb-5">Font sizes</h1>
                        <div className="md:flex flex-col">
                            <div className="flex flex-wrap md:flex-nowrap items-baseline leading-[170px]">
                                <div className="inline-block truncate text-198px">198px</div>
                                <div className="inline-block truncate text-156px">156px</div>
                            </div>
                            <div className="flex flex-wrap md:flex-nowrap gap-2 md:ml-5 items-baseline leading-[170px]">
                                <div className="inline-block truncate text-120px">120px</div>
                                <div className="inline-block truncate text-96px">96px</div>
                                <div className="inline-block truncate text-90px">90px</div>
                                <div className="inline-block truncate text-84px">84px</div>
                                <div className="inline-block truncate text-78px">78px</div>
                            </div>
                            <div className="flex flex-wrap md:flex-nowrap gap-2 md:ml-9 items-baseline leading-none">
                                <div className="inline-block truncate text-72px">72px</div>
                                <div className="inline-block truncate text-66px">66px</div>
                                <div className="inline-block truncate text-60px">60px</div>
                                <div className="inline-block truncate text-54px">54px</div>
                                <div className="inline-block truncate text-48px">48px</div>
                                <div className="inline-block truncate text-42px">42px</div>
                                <div className="inline-block truncate text-36px">36px</div>
                                <div className="inline-block truncate text-30px">30px</div>
                                <div className="inline-block truncate text-24px">24px</div>
                                <div className="inline-block truncate text-18px">18px</div>
                                <div className="inline-block truncate text-16px">16px</div>
                                <div className="inline-block truncate text-15px">15px</div>
                                <div className="inline-block truncate text-12px">12px</div>
                            </div>
                        </div>
                    </section>

                    <section className="container-regular">
                        <pre>{configValue}</pre>
                    </section>
                    <a
                        className="flex justify-center mb-10"
                        href="https://vercel.com/?utm_source=thedyanmics&utm_campaign=oss">
                        <svg
                            width="212"
                            height="44"
                            viewBox="0 0 212 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="212" height="44" rx="8" fill="black" />
                            <path
                                d="M60.4375 15.2266V26.5H61.8438V22.4766H64.6797C66.7969 22.4766 68.3047 20.9844 68.3047 18.875C68.3047 16.7266 66.8281 15.2266 64.6953 15.2266H60.4375ZM61.8438 16.4766H64.3281C65.9609 16.4766 66.8594 17.3281 66.8594 18.875C66.8594 20.3672 65.9297 21.2266 64.3281 21.2266H61.8438V16.4766ZM73.3441 26.6484C75.7425 26.6484 77.2269 24.9922 77.2269 22.2891C77.2269 19.5781 75.7425 17.9297 73.3441 17.9297C70.9456 17.9297 69.4613 19.5781 69.4613 22.2891C69.4613 24.9922 70.9456 26.6484 73.3441 26.6484ZM73.3441 25.4375C71.7503 25.4375 70.8519 24.2812 70.8519 22.2891C70.8519 20.2891 71.7503 19.1406 73.3441 19.1406C74.9378 19.1406 75.8363 20.2891 75.8363 22.2891C75.8363 24.2812 74.9378 25.4375 73.3441 25.4375ZM89.2975 18.0781H87.9459L86.2897 24.8125H86.1647L84.2819 18.0781H82.9928L81.11 24.8125H80.985L79.3288 18.0781H77.9694L80.3288 26.5H81.6881L83.5631 19.9844H83.6881L85.5709 26.5H86.9381L89.2975 18.0781ZM93.8213 19.1172C95.1572 19.1172 96.0478 20.1016 96.0791 21.5938H91.4384C91.54 20.1016 92.4775 19.1172 93.8213 19.1172ZM96.04 24.3203C95.6884 25.0625 94.9541 25.4609 93.8681 25.4609C92.4384 25.4609 91.5088 24.4062 91.4384 22.7422V22.6797H97.4931V22.1641C97.4931 19.5469 96.1103 17.9297 93.8369 17.9297C91.5244 17.9297 90.04 19.6484 90.04 22.2969C90.04 24.9609 91.5009 26.6484 93.8369 26.6484C95.6806 26.6484 96.9931 25.7578 97.3838 24.3203H96.04ZM99.2825 26.5H100.626V21.2812C100.626 20.0938 101.556 19.2344 102.837 19.2344C103.103 19.2344 103.587 19.2812 103.697 19.3125V17.9688C103.525 17.9453 103.243 17.9297 103.025 17.9297C101.908 17.9297 100.939 18.5078 100.689 19.3281H100.564V18.0781H99.2825V26.5ZM108.181 19.1172C109.517 19.1172 110.408 20.1016 110.439 21.5938H105.798C105.9 20.1016 106.838 19.1172 108.181 19.1172ZM110.4 24.3203C110.048 25.0625 109.314 25.4609 108.228 25.4609C106.798 25.4609 105.869 24.4062 105.798 22.7422V22.6797H111.853V22.1641C111.853 19.5469 110.47 17.9297 108.197 17.9297C105.884 17.9297 104.4 19.6484 104.4 22.2969C104.4 24.9609 105.861 26.6484 108.197 26.6484C110.041 26.6484 111.353 25.7578 111.744 24.3203H110.4ZM116.76 26.6484C117.924 26.6484 118.924 26.0938 119.455 25.1562H119.58V26.5H120.861V14.7344H119.518V19.4062H119.4C118.924 18.4844 117.932 17.9297 116.76 17.9297C114.619 17.9297 113.221 19.6484 113.221 22.2891C113.221 24.9375 114.603 26.6484 116.76 26.6484ZM117.072 19.1406C118.596 19.1406 119.549 20.3594 119.549 22.2891C119.549 24.2344 118.603 25.4375 117.072 25.4375C115.533 25.4375 114.611 24.2578 114.611 22.2891C114.611 20.3281 115.541 19.1406 117.072 19.1406ZM131.534 26.6484C133.667 26.6484 135.065 24.9219 135.065 22.2891C135.065 19.6406 133.674 17.9297 131.534 17.9297C130.378 17.9297 129.354 18.5 128.893 19.4062H128.768V14.7344H127.424V26.5H128.706V25.1562H128.831C129.362 26.0938 130.362 26.6484 131.534 26.6484ZM131.221 19.1406C132.76 19.1406 133.674 20.3203 133.674 22.2891C133.674 24.2578 132.76 25.4375 131.221 25.4375C129.69 25.4375 128.737 24.2344 128.737 22.2891C128.737 20.3438 129.69 19.1406 131.221 19.1406ZM137.261 29.5469C138.753 29.5469 139.425 28.9688 140.143 27.0156L143.433 18.0781H142.003L139.698 25.0078H139.573L137.261 18.0781H135.808L138.925 26.5078L138.768 27.0078C138.417 28.0234 137.995 28.3906 137.222 28.3906C137.034 28.3906 136.823 28.3828 136.659 28.3516V29.5C136.847 29.5312 137.081 29.5469 137.261 29.5469ZM154.652 26.5L158.55 15.2266H156.402L153.589 24.1484H153.457L150.621 15.2266H148.394L152.332 26.5H154.652ZM162.668 19.3203C163.832 19.3203 164.598 20.1328 164.637 21.3984H160.613C160.699 20.1484 161.512 19.3203 162.668 19.3203ZM164.652 24.1484C164.371 24.7812 163.707 25.1328 162.746 25.1328C161.473 25.1328 160.652 24.2422 160.605 22.8203V22.7188H166.574V22.0938C166.574 19.3984 165.113 17.7812 162.676 17.7812C160.199 17.7812 158.66 19.5078 158.66 22.2578C158.66 25.0078 160.176 26.6719 162.691 26.6719C164.707 26.6719 166.137 25.7031 166.488 24.1484H164.652ZM168.199 26.5H170.137V21.5625C170.137 20.3672 171.012 19.5859 172.27 19.5859C172.598 19.5859 173.113 19.6406 173.262 19.6953V17.8984C173.082 17.8438 172.738 17.8125 172.457 17.8125C171.356 17.8125 170.434 18.4375 170.199 19.2812H170.067V17.9531H168.199V26.5ZM181.7 20.8281C181.497 19.0312 180.168 17.7812 177.973 17.7812C175.403 17.7812 173.895 19.4297 173.895 22.2031C173.895 25.0156 175.411 26.6719 177.981 26.6719C180.145 26.6719 181.489 25.4688 181.7 23.6797H179.856C179.653 24.5703 178.981 25.0469 177.973 25.0469C176.653 25.0469 175.856 24 175.856 22.2031C175.856 20.4297 176.645 19.4062 177.973 19.4062C179.036 19.4062 179.676 20 179.856 20.8281H181.7ZM186.817 19.3203C187.981 19.3203 188.747 20.1328 188.786 21.3984H184.762C184.848 20.1484 185.661 19.3203 186.817 19.3203ZM188.802 24.1484C188.52 24.7812 187.856 25.1328 186.895 25.1328C185.622 25.1328 184.802 24.2422 184.755 22.8203V22.7188H190.723V22.0938C190.723 19.3984 189.262 17.7812 186.825 17.7812C184.348 17.7812 182.809 19.5078 182.809 22.2578C182.809 25.0078 184.325 26.6719 186.841 26.6719C188.856 26.6719 190.286 25.7031 190.637 24.1484H188.802ZM192.427 26.5H194.364V14.6484H192.427V26.5Z"
                                fill="white"
                            />
                            <path d="M23.3248 13L32.6497 29H14L23.3248 13Z" fill="white" />
                            <line x1="43.5" y1="2.18557e-08" x2="43.5" y2="44" stroke="#5E5E5E" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
