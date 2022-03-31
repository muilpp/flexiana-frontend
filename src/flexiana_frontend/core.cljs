(ns flexiana-frontend.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [cljs-http.client :as http]
      [cljs.core.async :refer [<!]])
      (:require-macros [cljs.core.async.macros :refer [go]])
)

;; -------------------------
;; Views

(def value-string-1 (r/atom ""))
(def value-string-2 (r/atom ""))

(defn scramble-text-inputs []
      (fn []
          [:p [:input {:type "text"
                       :value @value-string-1
                       :size 20
                       :placeholder "String 1"
                       :on-change #(reset! value-string-1 (-> % .-target .-value))}]

          [:input {:type "text"
                   :style {:margin-left "10px"}
                   :value @value-string-2
                   :size 20
                   :placeholder "String 2"
                   :on-change #(reset! value-string-2 (-> % .-target .-value))}]])
)

(defn process-response [resp]
      (if (= (:status resp) 200)
        (if (= (:body resp) true)
          (js/alert "Scramble found!")
          (js/alert "No scramble found, try again!"))
        (js/alert "Ooops, there was a problem with the request, did you write both words?"))
      (reset! value-string-1 "")
      (reset! value-string-2 "")
)

(defn scramble-request [endpoint]
      (go (process-response (<! (http/get endpoint {:with-credentials? false})))))

(defn scramble-send-button []
      [:input {:type  "button"
          :value "Scramble?"
          :on-click #(scramble-request (str "http://localhost:4000/scramble/" @value-string-1 "/" @value-string-2))
               }]
)

(defn home-page []
      [:div [:h2 "Scramble finder"]
       [scramble-text-inputs]
       [scramble-send-button]
       ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
