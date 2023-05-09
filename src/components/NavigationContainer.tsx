import { FunctionComponent } from "react";
import styles from "./NavigationContainer.module.css";
const NavigationContainer: FunctionComponent = () => {
  return (
    <div className={styles.navigationDropdownMenu}>
      <div className={styles.property1simple}>
        <div className={styles.headingSubheading}>
          <div className={styles.bookAConsultant}>Book a consultant</div>
          <div className={styles.bookAConsultant}>Start analyzing</div>
        </div>
        <img
          className={styles.property1simpleChild}
          alt=""
          src="/polygon-2.svg"
        />
      </div>
      <div className={styles.property1categoriesLink}>
        <div className={styles.singleNavigationColumn}>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/spatial-audio-off1.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>{`Consultant `}</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/iconsolidcode4.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>{`Developer `}</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/brush1.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>Designer</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/question-answer.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>C-Level</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/menu-book.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>Data Scientist</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
        </div>
        <div className={styles.navigationFooter}>
          <div className={styles.buttonsCamsol}>
            <img
              className={styles.localPostOfficeIcon}
              alt=""
              src="/local-post-office3.svg"
            />
            <div className={styles.consultant}>Camsol Team</div>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/iconsolidarrowright6.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.property1categoriesSubcat}>
        <div className={styles.navigationContent5}>
          <div className={styles.headingSubheading6}>
            <div className={styles.consultant}>Projects</div>
            <div
              className={styles.consolidationOfAnalysis5}
            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
          </div>
        </div>
        <div className={styles.largeNavigationContent}>
          <div className={styles.singleNavigationColumn}>
            <div className={styles.navigationTitle}>
              <div className={styles.consultant}>Innovation</div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/spatial-audio-off1.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>Vuca</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/iconsolidcode4.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>Disruption</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/brush1.svg"
              />
              <div className={styles.headingSubheading1}>
                <div
                  className={styles.consultant}
                >{`Digital Transformation `}</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
          </div>
          <div className={styles.singleNavigationColumn}>
            <div className={styles.navigationTitle}>
              <div className={styles.consultant}>Technology</div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/spatial-audio-off1.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>{`Consultant `}</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/iconsolidcode4.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>{`Developer `}</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/brush1.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>Designer</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/question-answer.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>C-Level</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
          </div>
          <div className={styles.singleNavigationColumn}>
            <div className={styles.navigationTitle}>
              <div className={styles.consultant}>Foundation</div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/spatial-audio-off1.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>{`Consultant `}</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/iconsolidcode4.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>{`Developer `}</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/brush1.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>Designer</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
            <div className={styles.navigationContent}>
              <img
                className={styles.spatialAudioOffIcon}
                alt=""
                src="/question-answer.svg"
              />
              <div className={styles.headingSubheading1}>
                <div className={styles.consultant}>C-Level</div>
                <div
                  className={styles.consolidationOfAnalysis}
                >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigationFooter1}>
          <div className={styles.largeNavigationContent}>
            <div className={styles.singleNavigationColumn}>
              <div className={styles.navigationTitle3}>
                <div className={styles.linkAndIcon}>
                  <div className={styles.consultant}>Innovation Projects</div>
                  <img
                    className={styles.iconsolidarrowRight1}
                    alt=""
                    src="/iconsolidarrowright7.svg"
                  />
                </div>
              </div>
              <div className={styles.navigationTitle3}>
                <div className={styles.linkAndIcon}>
                  <div className={styles.consultant}>Technology Projects</div>
                  <img
                    className={styles.iconsolidarrowRight1}
                    alt=""
                    src="/iconsolidarrowright7.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.singleNavigationColumn5}>
              <div className={styles.navigationTitle3}>
                <div className={styles.linkAndIcon}>
                  <div className={styles.consultant}>Foundation Projects</div>
                  <img
                    className={styles.iconsolidarrowRight1}
                    alt=""
                    src="/iconsolidarrowright7.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.property1categories}>
        <div className={styles.singleNavigationColumn6}>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/rocket-launch3.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>Camsol Innovation</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/iconsolidcode4.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>Camsol Technology</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/volunteer-activism.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>Camsol Foundation</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/question-answer.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>Camsol Platform</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.spatialAudioOffIcon}
              alt=""
              src="/menu-book.svg"
            />
            <div className={styles.headingSubheading1}>
              <div className={styles.consultant}>Camsol Learning</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
        </div>
        <img
          className={styles.property1categoriesChild}
          alt=""
          src="/polygon-2.svg"
        />
      </div>
    </div>
  );
};

export default NavigationContainer;
